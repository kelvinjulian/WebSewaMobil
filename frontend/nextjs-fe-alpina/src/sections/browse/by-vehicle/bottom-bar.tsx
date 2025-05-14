import { formatRupiah } from '@/utils/utils';
import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';

type Props = {
  price: number;
  duration: number;
  slug: string;
};

export function BottomCTA({ price, duration, slug }: Props) {
  const router = useRouter();

  return (
    <div id='Bottom-CTA' className='relative flex h-[93px] z-20'>
      <div className='fixed bottom-0 w-full flex items-center justify-between max-w-[640px] p-5 bg-alpina-black'>
        <div className='flex flex-col gap-[6px]'>
          <p className='font-extrabold text-[22px] leading-[33px] text-white'>
            {formatRupiah(price)}
          </p>
          <p className='font-semibold text-sm leading-[21px] text-alpina-orange'>
            / {duration} hari sewa
          </p>
        </div>
        <Button
          onClick={() => {
            router.push(`/booking?slug=${slug}`);
          }}>
          Book Now
        </Button>
      </div>
    </div>
  );
}
