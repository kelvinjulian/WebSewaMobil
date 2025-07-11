// components/FileUpload.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Controller, useFormContext, RegisterOptions } from 'react-hook-form';
import ReceiptTextIcon from '@/assets/images/icons/receipt-text.svg';

type Props = {
  name: string;
  label?: string;
  rules?: RegisterOptions;
};

export const FileUpload = ({
  name,
  label = 'Add an attachment',
  rules,
}: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [fileName, setFileName] = useState<string | null>(null);

  // Safely extract error message
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div>
      <label
        className={`relative flex items-center h-[62px] rounded-full border p-[10px_24px] gap-[10px] bg-[#F9FAFB] transition-all duration-300 ${
          errorMessage
            ? 'border-red-500 focus-within:ring-red-500'
            : 'border-[#EFF2F7] focus-within:ring-[#362EED]'
        }`}>
        <div className='w-6 h-6 flex shrink-0'>
          <Image src={ReceiptTextIcon} alt='icon' width={24} height={24} />
        </div>

        <div className='w-full flex flex-col-reverse'>
          <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
              <input
                type='file'
                accept='image/*'
                className='peer absolute -z-10 opacity-0 w-[10px]'
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  setFileName(file ? file.name : null);
                  field.onChange(file); // Only pass the file object, not the value
                }}
              />
            )}
          />
          {/* Show file name if available, else show placeholder */}
          <p className='text-alpina-light-grey peer-valid:text-xs peer-valid:leading-[18px]'>
            {fileName || label}
          </p>
        </div>
      </label>

      {/* Error message */}
      {errorMessage && (
        <p className='text-red-500 text-xs mt-1'>{errorMessage}</p>
      )}
    </div>
  );
};
