'use client';

import BackBorder from '@/assets/images/icons/back-border.svg';
import Image from 'next/image';
import { CategoryWithVehicles } from '@/types';
import { useRouter } from 'next/navigation';

type Props = {
  vehiclesByCategory: CategoryWithVehicles;
};

export function TopBar({ vehiclesByCategory }: Props) {
  const router = useRouter();
  return (
    <div
      id='Top-Bar'
      className='flex items-center justify-between px-4 mt-[60px] z-10'>
      <Image
        onClick={() => router.push('/')}
        src={BackBorder}
        className='flex shrink-0 w-10 cursor-pointer'
        alt='icon'
      />

      <div className='w-fit text-center'>
        <p className='text-sm leading-[21px] text-alpina-grey'>Browse Our</p>
        <p className='font-bold text-xl leading-[30px]'>
          {vehiclesByCategory.vehicles_count} {vehiclesByCategory.name}
        </p>
      </div>
      <div className='dummy-btn w-10' />
    </div>
  );
}
