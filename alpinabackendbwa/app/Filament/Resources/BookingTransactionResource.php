<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Vehicle;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use App\Models\BookingTransaction;
use Filament\Forms\FormsComponent;
use Filament\Forms\Components\Grid;
use Filament\Notifications\Notification;
use Filament\Tables\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use Filament\Forms\Components\ToggleButtons;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\BookingTransactionResource\Pages;
use App\Filament\Resources\BookingTransactionResource\RelationManagers;

class BookingTransactionResource extends Resource
{
    protected static ?string $model = BookingTransaction::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                Forms\Components\Wizard::make([
                    
                    Forms\Components\Wizard\Step::make('Product and Price')
                    ->schema([

                        Grid::make(2)
                        ->schema([
                            Forms\Components\Select::make('vehicle_id')
                            ->relationship('vehicle', 'name')
                            ->searchable()
                            ->preload()
                            ->required()
                            ->live()
                            ->afterStateUpdated(function($state, callable $set) {

                                $vehicle = Vehicle::find($state);
                                $price = $vehicle ? $vehicle->price : 0;
                                $duration = $vehicle ? $vehicle->duration : 0;
                                $insurance = 500000;

                                $tax = 0.11;
                                $totalTaxAmount = $tax * $price;

                                $totalAmount = $price + $totalTaxAmount + $insurance;

                                $set('total_tax_amount', number_format($totalTaxAmount, 0, '', ''));
                                $set('insurance', $insurance);
                                $set('price', $price);
                                $set('duration', $duration);
                                $set('total_amount', number_format($totalAmount, 0, '', ''));

                            })
                            ->afterStateHydrated(function($state, callable $set, callable $get) {

                                $vehicle = Vehicle::find($state);
                                $price = $vehicle ? $vehicle->price : 0;
                                $duration = $vehicle ? $vehicle->duration : 0;
                                $insurance = 500000;

                                $tax = 0.11;
                                $totalTaxAmount = $tax * $price;

                                $totalAmount = $price + $totalTaxAmount + $insurance;

                                // set the existing values for the fields
                                $set('total_tax_amount', number_format($totalTaxAmount, 0, '', ''));
                                $set('insurance', $insurance);
                                $set('price', $price);
                                $set('duration', $duration);
                                $set('total_amount', number_format($totalAmount, 0, '', ''));
                            }),

                            Forms\Components\TextInput::make('duration')
                            ->required()
                            ->numeric()
                            ->readOnly()
                            ->prefix('IDR'),

                            Forms\Components\TextInput::make('total_amount')
                            ->required()
                            ->readOnly()
                            ->numeric()
                            ->prefix('IDR'),

                            Forms\Components\TextInput::make('price')
                            ->required()
                            ->readOnly()
                            ->numeric()
                            ->prefix('IDR'),

                            Forms\Components\TextInput::make('total_tax_amount')
                            ->required()
                            ->readOnly()
                            ->numeric()
                            ->prefix('IDR'),

                            Forms\Components\TextInput::make('insurance')
                            ->required()
                            ->readOnly()
                            ->numeric()
                            ->prefix('IDR'),

                            Forms\Components\DatePicker::make('started_at')
                            ->required(),

                            Forms\Components\Select::make('alpina_store_id')
                            ->relationship('alpinaStore', 'name')
                            ->searchable()
                            ->preload()
                            ->required(),
                        ]),
                    ]),

                    Forms\Components\Wizard\Step::make('Customer Information')
                    ->schema([
                        
                        Grid::make(2)
                        ->schema([
                            Forms\Components\TextInput::make('name')
                            ->required()
                            ->maxLength(255),

                            Forms\Components\TextInput::make('phone')
                            ->required()
                            ->maxLength(255),

                            Forms\Components\TextInput::make('email')
                            ->required()
                            ->maxLength(255),
                        ])
                    ]),

                    Forms\Components\Wizard\Step::make('Payment Information')
                    ->schema([

                        Forms\Components\TextInput::make('booking_trx_id')
                        ->required()
                        ->maxLength(255),

                        ToggleButtons::make('is_paid')
                        ->label('Apakah sudah membayar?')
                        ->boolean()
                        ->grouped()
                        ->icons([
                            true=> 'heroicon-o-pencil',
                            false=> 'heroicon-o-clock',
                        ])
                        ->required(),

                        Forms\Components\FileUpload::make('proof')
                        ->image()
                        ->required(),
                    ]),

                ])
                ->columnSpan('full') // Use full width for the wizard
                ->columns(1) // Make sure the form has a single column layout
                ->skippable(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                Tables\Columns\ImageColumn::make('vehicle.thumbnail')
                ->label('Thumbnail'),

                Tables\Columns\TextColumn::make('vehicle.name')
                ->searchable()
                ->label('Vehicle Name'),

                Tables\Columns\TextColumn::make('name')
                ->searchable(),

                Tables\Columns\TextColumn::make('booking_trx_id')
                ->searchable(),

                Tables\Columns\IconColumn::make('is_paid')
                ->boolean()
                ->trueColor('success')
                ->falseColor('danger')
                ->trueIcon('heroicon-o-check-circle')
                ->falseIcon('heroicon-o-x-circle')
                ->label('Terverifikasi'),
            ])
            ->filters([
                SelectFilter::make('vehicle_id')
                ->label('vehicle')
                ->relationship('vehicle', 'name'),

                Tables\Filters\TrashedFilter::make(),
            ])
            
            ->actions([

                Tables\Actions\Action::make('approve')
                ->label('Approve')
                ->action(function (BookingTransaction $record) {
                    $record->is_paid = true;
                    $record->save();

                    // Trigger the custom notification
                    Notification::make()
                        ->title('Transaction Approved')
                        ->success()
                        ->body('The transcation has been successfully approved.')
                        ->send();
                })
                ->color('success')
                ->requiresConfirmation()
                ->visible(fn (BookingTransaction $record) => !$record->is_paid),

                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBookingTransactions::route('/'),
            'create' => Pages\CreateBookingTransaction::route('/create'),
            'edit' => Pages\EditBookingTransaction::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
