'use client';

import BackBorder from '@/assets/images/icons/back-border-white.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  subTitle: string;
};

export function TopBar({ title, subTitle }: Props) {
  const router = useRouter();

  const handleBack = () => {
    router.push(`/`);
  };

  return (
    <>
      <div className={`absolute backdrop w-full h-[400px] bg-alpina-blue`} />

      <div
        id='Top-Bar'
        className='flex items-center justify-between px-4 mt-[60px] z-[50]'>
        <Image
          src={BackBorder}
          className='flex shrink-0 w-10 cursor-pointer'
          alt='icon'
          onClick={handleBack}
        />

        <div className='w-fit text-center text-white'>
          <p className='text-sm leading-[21px]'>{title}</p>
          <p className='font-bold text-xl leading-[30px]'>{subTitle}</p>
        </div>

        {/* Dummy button to balance the layout */}
        <div className='dummy-btn w-10'></div>
      </div>
    </>
  );
}
