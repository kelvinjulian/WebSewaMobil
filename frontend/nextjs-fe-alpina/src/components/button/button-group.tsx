import React from 'react';
import Image from 'next/image';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  icon: string;
  fullWidth?: boolean;
  type?: 'reset' | 'submit' | 'button';
};

export const ButtonGroup = ({
  onClick,
  children,
  icon,
  fullWidth = false,
  type = 'button',
}: Props) => {
  return (
    <div className='flex justify-center'>
      <button
        type={type}
        onClick={onClick}
        className={`flex items-center justify-between rounded-full p-[14px_24px] bg-alpina-blue ${
          fullWidth ? 'w-full' : 'w-auto'
        }`}>
        <span className='font-bold text-white'>{children}</span>
        <Image src={icon} className='w-6 h-6' alt='icon-button' />
      </button>
    </div>
  );
};
