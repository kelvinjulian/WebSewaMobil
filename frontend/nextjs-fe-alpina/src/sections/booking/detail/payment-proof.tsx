import Image from 'next/image';
import { useState } from 'react';
import ArrowCircleDown from '@/assets/images/icons/arrow-circle-down.svg';

type Props = {
  proofUrl: string;
};

export const PaymentProof = ({ proofUrl }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id='Payment-Proof' className='px-4 mt-5 z-10'>
      <div
        className={`accordion flex flex-col rounded-[20px] border border-[#EFF2F7] p-5 gap-[18px] bg-white overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px]' : 'max-h-[64px]'
        }`}>
        <label
          className='flex items-center justify-between cursor-pointer'
          onClick={toggleAccordion}>
          <p className='font-bold'>Proof of Payment</p>
          <Image
            src={ArrowCircleDown}
            alt='dropdown'
            width={24}
            height={24}
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </label>
        <div
          className={`mt-4 flex flex-col gap-4 transition-opacity duration-500 ease-in-out ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
          <div className='w-full aspect-[321/200] rounded-[20px] bg-[#1D68B4] overflow-hidden'>
            <Image
              src={proofUrl}
              alt='Proof of payment'
              layout='responsive'
              width={100}
              height={100}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
