import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import ArrowCircleDown from '@/assets/images/icons/arrow-circle-down.svg'; // Ensure this import is correct
import { Store } from '@/types';
import { useEffect, useState, useRef } from 'react';
import axiosInstance from '@/utils/axiosInstance';

export const PaymentStore = () => {
  const { watch } = useFormContext();
  const selectedStore = watch('alpina_store_id');
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement>(null); // Use ref to access content height
  const [optionStores, setOptionStores] = useState<Store[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getStores = async () => {
      try {
        const { data } = await axiosInstance.get(`/stores`);
        setOptionStores(data.data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };
    getStores();
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id='Delivery-Details' className='px-4 mt-5 z-10'>
      {optionStores.map((store: Store) => {
        if (store.id === Number(selectedStore)) {
          return (
            <div
              key={store.id}
              className='group accordion flex flex-col rounded-[20px] border border-[#EFF2F7] p-5 gap-[18px] bg-white'>
              <label
                className='flex items-center justify-between cursor-pointer'
                onClick={handleToggle}>
                <p className='font-bold'>Pickup Store At</p>
                <Image
                  src={ArrowCircleDown}
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    isOpen ? '-rotate-180' : 'rotate-0'
                  }`}
                  alt='icon'
                  width={100}
                  height={100}
                />
              </label>
              {/* Content container */}
              <div
                ref={contentRef}
                style={{
                  maxHeight: isOpen
                    ? `${contentRef.current?.scrollHeight}px`
                    : '0px',
                  transition: 'max-height 0.3s ease-in-out',
                }}
                className='overflow-hidden transition-all duration-300'>
                <div className='flex items-center gap-[14px]'>
                  <div className='w-[90px] h-[90px] rounded-[20px] flex shrink-0 overflow-hidden bg-[#1D68B4]'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${store.thumbnail}`}
                      className='w-full h-full object-cover'
                      alt='store-thumbnail'
                      width={90}
                      height={90}
                    />
                  </div>
                  <div className='flex flex-col gap-1 w-full'>
                    <p className='font-bold line-clamp-1'>{store.name}</p>
                    <p className='text-sm leading-[21px] line-clamp-2'>
                      {store.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </section>
  );
};
