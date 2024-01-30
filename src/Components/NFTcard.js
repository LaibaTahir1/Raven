import React from 'react'

function NFTcard() {
  return (
    <div className='max-w-[430px]'>
        <div className='p-[12px] bg-[#050907] rounded-[12px]'>
        <p className='text-2xl font-bold'>Pass Tier List</p>
        <p className='pt-[4px] text-[#626262] text-lg font-normal'>Boost your revenue sharing</p>
        <div className='mt-[12px]'>
            <div className='flex gap-[10px]'>
            <div className=' text-center p-[10px]'>
                <p className='text-lg font-normal text-[#8B4513]'>Tier 1</p>
                <p className='mt-[45px] text-[#B1B1B1] font-normal text-lg'>3 days bonus </p>
                <p className='text-[#B1B1B1] font-normal text-lg'>acess</p>
                <p className='mt-[45px] text-[#B1B1B1] font-normal text-lg'>0.07E</p>
            </div>
            <div className=' text-center p-[10px]'>
                <p className='text-lg font-normal text-[#C0C0C0]'>Tier 2</p>
                <p className='mt-[45px] text-[#B1B1B1] font-normal text-lg'>2 weeks bonus</p>
                <p className='text-[#B1B1B1] font-normal text-lg'>acess</p>
                <p className='mt-[45px] text-[#B1B1B1] font-normal text-lg'>0.15E</p>
            </div>
            <div className=' text-center p-[10px]'>
                <p className='text-lg font-normal text-[#FFD700]'>Tier 3</p>
                <p className='mt-[25px] text-[#B1B1B1] font-normal text-lg'>30 days bonus</p>
                <p className='text-[#B1B1B1] font-normal text-lg'>acess +</p>
                <p className='text-[#B1B1B1] font-normal text-lg'>Elite Chat</p>
                <p className='mt-[45px] text-[#B1B1B1] font-normal text-lg'>0.30E</p>
            </div>
            </div>
            <div className='border-[#121C16] border-b'></div>
            <div className='py-[27px] px-[160px]  '>
                <button className='text-[#627E68] text-lg font-normal px-[15px] border border-[#121A16] hover:bg-[#060F09] py-[4px] rounded-tl-xl rounded-br-xl'>Subscribe</button>
            </div>
        </div>

        </div>
      
    </div>
  )
}

export default NFTcard
