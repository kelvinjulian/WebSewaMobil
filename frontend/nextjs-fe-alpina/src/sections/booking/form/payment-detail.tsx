import { useState, useRef } from 'react';
import Image from 'next/image';
import ArrowCircleDown from '@/assets/images/icons/arrow-circle-down.svg';
import DollarSquare from '@/assets/images/icons/dollar-square.svg';
import SecurityCard from '@/assets/images/icons/security-card.svg';
import Courthouse from '@/assets/images/icons/courthouse.svg';
import TicketDiscount from '@/assets/images/icons/ticket-discount.svg';
import CardTick from '@/assets/images/icons/card-tick.svg';
import { formatRupiah } from '@/utils/utils';

type Props = {
  price: number;
  insurance: number;
  total_tax: number;
  discount: number;
  total_amount: number;
};

export const PaymentDetail = ({
  price,
  insurance,
  total_amount,
  discount,
  total_tax,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Define the payment details dynamically
  const paymentDetails = [
    {
      label: 'Price',
      icon: DollarSquare,
      value: formatRupiah(price),
    },
    {
      label: 'Insurance',
      icon: SecurityCard,
      value: formatRupiah(insurance),
    },
    {
      label: 'Tax 11%',
      icon: Courthouse,
      value: formatRupiah(total_tax),
    },
    {
      label: 'Discount',
      icon: TicketDiscount,
      value: formatRupiah(discount),
    },
    {
      label: 'Grand Total',
      icon: CardTick,
      value: formatRupiah(total_amount),
      isBold: true,
    },
  ];

  return (
    <section id='Payment-Details' className='px-4 mt-5 z-10'>
      <div
        className={`group accordion flex flex-col rounded-[20px] border border-[#EFF2F7] p-5 gap-[18px] bg-white transition-all duration-300 ${
          isOpen ? 'has-[:checked]!h-auto' : 'has-[:checked]!h-[64px]'
        } overflow-hidden`}>
        <label
          className='flex items-center justify-between cursor-pointer'
          onClick={handleToggle}>
          <p className='font-bold'>Payment Details</p>
          <Image
            src={ArrowCircleDown}
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isOpen ? '-rotate-180' : 'rotate-0'
            }`}
            alt='icon'
            width={24}
            height={24}
          />
        </label>

        <div
          ref={contentRef}
          style={{
            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
            transition: 'max-height 0.3s ease-in-out',
          }}
          className='overflow-hidden'>
          {/* Map through paymentDetails array and render each detail */}
          {paymentDetails.map((detail, index) => (
            <div
              key={index}
              className='flex items-center justify-between mb-4' // Added margin-bottom
            >
              <div className='flex items-center gap-[6px]'>
                <Image
                  src={detail.icon}
                  className='w-6 h-6'
                  alt={`${detail.label}-icon`}
                  width={24}
                  height={24}
                />
                <p>{detail.label}</p>
              </div>
              <p
                className={`${
                  detail.isBold
                    ? 'font-bold text-[22px] leading-[33px] text-alpina-blue'
                    : 'font-semibold'
                }`}>
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
