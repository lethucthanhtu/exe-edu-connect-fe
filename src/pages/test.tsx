/** */
export default function Test() {
  return (
    <>
      <div className='size-full flex justify-center items-center'>
        <div className='w-full h-1/5 bg-red-200 flex justify-end items-center'>
          <div className='flex justify-center items-center gap-2 w-auto h-full bg-yellow-200'>
            <div className='aspect-square h-3/5 bg-purple-200'></div>
            <div className='aspect-square h-3/5 bg-green-200'></div>
            <div className='aspect-square h-3/5 bg-blue-200'></div>
          </div>
        </div>
      </div>
    </>
  );
}
