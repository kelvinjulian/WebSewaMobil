'use client';

import BackBorder from '@/assets/images/icons/back-border.svg';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

export function TopBar() {
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
        <p className='text-sm leading-[21px] text-alpina-grey'>Read More</p>
        <p className='font-bold text-xl leading-[30px]'>Car Details</p>
      </div>
      <div className='dummy-btn w-10' />
    </div>
  );
}
