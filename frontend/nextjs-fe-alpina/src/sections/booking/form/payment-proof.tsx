import { useState } from 'react';
import Image from 'next/image';
import ArrowCircleDown from '@/assets/images/icons/arrow-circle-down.svg';
import { FileUpload } from '@/components/hook-form';

export const PaymentProof = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id='Proof-Payment' className='px-4 mt-5 z-10'>
      <div
        className={`group accordion flex flex-col rounded-[20px] border border-[#EFF2F7] p-5 gap-[18px] bg-white overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] p-5' : 'max-h-[64px] p-2'
        }`}>
        <label
          className='flex items-center justify-between cursor-pointer'
          onClick={toggleAccordion}>
          <p className='font-bold'>Proof of Payment</p>
          <Image
            src={ArrowCircleDown}
            className={`w-6 h-6 transition-all duration-300 ${
              isOpen ? '-rotate-180' : ''
            }`}
            alt='icon'
            width={24}
            height={24}
          />
        </label>

        {isOpen && (
          <div className='mt-4'>
            <FileUpload name='proof' label='Add proof of payment' />
          </div>
        )}
      </div>
    </section>
  );
};
