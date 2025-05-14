'use client';
import Image from 'next/image';
import { Vehicle } from '@/types';
import Flash from '@/assets/images/icons/flash.svg';
import Star from '@/assets/images/icons/star.svg';
import { formatRupiah } from '@/utils/utils';
import { useRouter } from 'next/navigation';

type Props = { vehicles: Vehicle[] };

export const VehiclesCard = ({ vehicles }: Props) => {
  const router = useRouter();
  return (
    <section id='Newest' className='flex flex-col gap-3 px-4 mt-[30px]'>
      <h2 className='font-bold'>Newest Arrival</h2>
      {vehicles.map((vehicle, i) => (
        <div
          className='flex flex-col gap-3 cursor-pointer'
          key={i}
          onClick={() => router.push(`/browse/${vehicle.slug}`)}>
          <div className='flex items-center w-full rounded-[20px] border border-[#EFF2F7] p-[10px_14px] gap-[14px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300'>
            <div className='flex w-[130px] h-[100px] shrink-0 overflow-hidden'>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${vehicle.thumbnail}`}
                className='w-full h-full object-contain'
                alt='thumbnail'
                width={500}
                height={300}
              />
            </div>
            <div className='flex flex-col gap-[14px] w-full'>
              <div className='flex flex-col gap-1'>
                <h3 className='font-bold'>{vehicle.name}</h3>
                <p className='font-semibold text-sm leading-[21px] text-alpina-blue'>
                  {formatRupiah(vehicle.price)}
                </p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[2px]'>
                  <Image src={Flash} className='w-5 h-5' alt='icon' />
                  <p className='font-semibold text-sm leading-[21px]'>
                    {vehicle.max_speed} kmh
                  </p>
                </div>
                <div className='flex items-center gap-[2px] justify-end'>
                  <p className='font-semibold text-sm leading-[21px]'>4/5</p>
                  <Image src={Star} className='w-5 h-5' alt='icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
