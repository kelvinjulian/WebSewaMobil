export type Photo = {
  id: number;
  photo: string;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  vehicles_count: number | null;
};

export type Testimonial = {
  id: number;
  name: string;
  photo: string;
  message: string;
  position?: string;
};

export type Vehicle = {
  id: number;
  name: string;
  slug: string;
  duration: number;
  horse_power: number;
  cc: number;
  max_speed: number;
  price: number;
  isPopular: number;
  thumbnail: string;
  about: string;
  category: Category;
  photos?: Photo[];
  testimonials?: Testimonial[];
};

export type CategoryWithVehicles = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  vehicles_count: number;
  vehicles: Vehicle[];
};

export type Store = {
  id: number;
  name: string;
  thumbnail: string;
  address: string;
};

export type Booking = {
  id: number;
  name: string;
  phone: string;
  email: string;
  proof: string;
  booking_trx_id: string;
  is_paid: number;
  total_amount: number;
  total_tax_amount: number;
  price: number;
  insurance: number;
  started_at: string;
  vehicle_id: number;
  alpina_store_id: number;
  vehicle: Vehicle;
  alpinaStore: Store;
};
