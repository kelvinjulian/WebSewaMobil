export const StoreOptionSkeleton = () => (
  <div className='relative group w-full rounded-[20px] p-[10px_14px] bg-white flex items-center gap-[14px]'>
    <div className='w-[90px] h-[90px] rounded-[20px] flex shrink-0 overflow-hidden bg-gray-300 animate-pulse' />
    <div className='flex flex-col gap-1 w-full'>
      <div className='w-3/4 h-5 bg-gray-300 rounded-md animate-pulse' />
      <div className='w-1/2 h-4 bg-gray-200 rounded-md animate-pulse mt-2' />
    </div>
    <div className='w-6 h-6 bg-gray-300 rounded-full animate-pulse flex-shrink-0' />
  </div>
);
