import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import Building4 from '@/assets/images/icons/building-4.svg';
import Car from '@/assets/images/icons/car.svg';

const deliveryOptions = [
  { value: 'pickup', label: 'Pickup Store', icon: Building4 },
  { value: 'delivery', label: 'Home Delivery', icon: Car },
];

export const DeliveryOption = () => {
  const { register, watch } = useFormContext();
  const selectedDeliveryType = watch('deliveryType'); // Watch for changes in the form field

  return (
    <div>
      <p className='font-bold'>Delivery Option</p>
      <div
        className='tab-link-btns flex items-center gap-4'
        style={{ whiteSpace: 'nowrap' }}>
        {deliveryOptions.map((option) => (
          <label
            key={option.value}
            className={`tablink mt-3 relative w-full rounded-full p-[10px_14px] font-semibold bg-white transition-all duration-300 hover:ring-1 hover:ring-alpina-blue ${
              selectedDeliveryType === option.value
                ? 'ring-1 ring-alpina-blue'
                : ''
            }`}>
            <div className='flex items-center gap-3'>
              <div className='w-6 h-6 flex shrink-0'>
                <Image src={option.icon} alt={option.label} />
              </div>
              <p>{option.label}</p>
            </div>
            <input
              type='radio'
              value={option.value}
              checked={selectedDeliveryType === option.value}
              {...register('deliveryType', { required: true })}
              className='absolute -z-10 top-1/2 left-1/2 opacity-0'
            />
          </label>
        ))}
      </div>
    </div>
  );
};
