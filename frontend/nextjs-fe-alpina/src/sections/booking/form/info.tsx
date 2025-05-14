import Image from 'next/image';
import { formatRupiah } from '@/utils/utils';
import Flash from '@/assets/images/icons/flash.svg';
import Star from '@/assets/images/icons/star.svg';

type Props = {
  thumbnail: string | null;
  name: string | null;
  price: number | null;
  max_speed: number | null;
};

export const FormInfo = ({ thumbnail, name, price, max_speed }: Props) => (
  <div id='header' className='px-4 z-10 mt-[30px]'>
    <div className='flex items-center w-full rounded-[20px] border border-[#EFF2F7] p-[10px_14px] gap-[14px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300'>
      <div className='flex w-[130px] h-[100px] shrink-0 overflow-hidden'>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${thumbnail}`}
          className='w-full h-full object-contain'
          alt='thumbnail'
          width={130}
          height={100}
        />
      </div>
      <div className='flex flex-col gap-[14px] w-full'>
        <div className='flex flex-col gap-1'>
          <h3 className='font-bold'>{name}</h3>
          <p className='font-semibold text-sm leading-[21px] text-alpina-blue'>
            {price ? formatRupiah(price) : '0'}
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[2px]'>
            <Image src={Flash} alt='speed' width={20} height={20} />
            <p className='font-semibold text-sm leading-[21px]'>
              {max_speed}kmh
            </p>
          </div>
          <div className='flex items-center gap-[2px] justify-end'>
            <p className='font-semibold text-sm leading-[21px]'>4/5</p>
            <Image src={Star} alt='rating' width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
