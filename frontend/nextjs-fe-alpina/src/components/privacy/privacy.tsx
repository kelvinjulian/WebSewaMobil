import Image from 'next/image';
import ShieldTick from '@/assets/images/icons/shield-tick.svg';

export const Privacy = () => {
  return (
    <div className='flex items-center gap-[10px]'>
      <Image
        src={ShieldTick}
        className='w-8 h-8 flex shrink-0'
        alt='Privacy Protection'
      />
      <p className='font-semibold leading-[26px]'>
        Kami melindungi privasi anda dengan baik bantuan Angga Pro.
      </p>
    </div>
  );
};
