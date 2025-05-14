import { Testimonial } from '@/types';
import Image from 'next/image';
import Star from '@/assets/images/icons/star.svg';

type Props = {
  testimonials: Testimonial[];
};

export function VehicleTestimonials({ testimonials }: Props) {
  return (
    <section
      id='Testimonials'
      className='flex flex-col gap-3 py-5 px-4 bg-[#F9FAFB]'>
      <h2 className='font-bold'>Happy Customers</h2>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className='testi-card flex flex-col rounded-[20px] border border-[#EFF2F7] p-[14px] gap-[14px] bg-white'>
          <p className='leading-[28px]'>{testimonial.message}</p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden'>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${testimonial.photo}`}
                  className='w-full h-full object-cover'
                  alt={`Photo of ${testimonial.name}`}
                  width={500}
                  height={500}
                  loading='lazy'
                />
              </div>
              <div>
                <p className='font-bold text-sm leading-[21px]'>
                  {testimonial.name}
                </p>
                <p className='font-semibold text-sm leading-[21px] text-alpina-blue'>
                  {testimonial.position}
                </p>
              </div>
            </div>
            <div className='flex items-center gap-[2px]'>
              {Array(5)
                .fill('')
                .map((_, idx) => (
                  <Image
                    key={idx}
                    src={Star}
                    className='w-5 h-5'
                    width={100}
                    alt='star'
                  />
                ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
