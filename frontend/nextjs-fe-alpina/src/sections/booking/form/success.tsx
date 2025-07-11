import Image from 'next/image';
import Logo from '@/assets/images/logos/logo.svg';
import Note from '@/assets/images/icons/note-favorite-black.svg';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/button';

type Props = {
  booking: any;
};

export function FormSuccess({ booking }: Props) {
  const router = useRouter();

  return (
    <div
      id='main-content'
      className='relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white'>
      <div className='flex flex-col items-center h-fit pt-[60px] pb-[30px] m-auto'>
        {/* Logo */}
        <Image src={Logo} alt='logo' width={100} height={100} />

        {/* Heading */}
        <h1 className='text-center mt-[30px] font-bold text-2xl leading-9'>
          Booking is Finished,
          <br />
          Congratulations!
        </h1>

        {/* Thumbnail */}
        <div className='w-full aspect-[393/300] overflow-hidden mt-[30px] pl-4'>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${booking?.vehicle?.thumbnail}`}
            className='w-full h-auto object-contain'
            alt='thumbnail'
            width={1000}
            height={1000}
          />
        </div>

        <div className='flex flex-col w-[340px] gap-5 mt-[30px]'>
          <div className='flex flex-col gap-3'>
            <p className='font-semibold text-sm leading-[22px]'>
              Gunakan booking id transaction berikut untuk periksa status
              pemesanan mobilmu
            </p>

            {/* Booking ID */}
            <div className='group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300'>
              <Image
                src={Note}
                className='w-6 h-6 flex shrink-0'
                alt='icon'
                width={24}
                height={24}
              />
              <div className='w-full flex flex-col-reverse'>
                <p className='font-semibold'>{booking.booking_trx_id}</p>
                <p className='text-xs leading-[18px] text-alpina-light-grey'>
                  Booking ID
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className='flex flex-col gap-3'>
            <Button onClick={() => router.push('/')}>Explore Again</Button>

            <Button
              variant='black'
              onClick={() =>
                router.push(
                  `/booking/detail?booking_trx_id=${booking.booking_trx_id}&phone=${booking.phone}`
                )
              }>
              Check My Booking
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
