import Image from 'next/image';
import Star from '@/assets/images/icons/star.svg';
import Crown from '@/assets/images/icons/crown.svg';
import Flash from '@/assets/images/icons/flash.svg';

type Props = {
  cc: number;
  horsePower: number;
  maxSpeed: number;
};

export function VehicleSpecs({ cc, horsePower, maxSpeed }: Props) {
  return (
    <div id='Specs' className='px-4'>
      <div className='flex items-center justify-evenly rounded-[20px] border border-[#EFF2F7] py-4 px-5'>
        <div className='flex flex-col items-center gap-2'>
          <Image
            src={Star}
            className='w-6 h-6'
            alt='star icon'
            width={500}
            height={300}
            loading='lazy'
          />
          <p className='font-semibold'>{cc}cc</p>
        </div>
        <span className='h-[46px] border border-[#EFF2F7]'></span>
        <div className='flex flex-col items-center gap-2'>
          <Image
            src={Crown}
            className='w-6 h-6'
            alt='horsepower icon'
            width={500}
            height={300}
            loading='lazy'
          />
          <p className='font-semibold'>{horsePower}hp</p>
        </div>
        <span className='h-[46px] border border-[#EFF2F7]'></span>
        <div className='flex flex-col items-center gap-2'>
          <Image
            src={Flash}
            className='w-6 h-6'
            alt='max speed icon'
            width={500}
            height={300}
            loading='lazy'
          />
          <p className='font-semibold'>{maxSpeed}kmh</p>
        </div>
      </div>
    </div>
  );
}
