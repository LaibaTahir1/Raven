import React from 'react'

function SPage() {
  return (
    <div className=' max-w-[450px] '>
        <div className='bg-[#050907] p-[24px] rounded-[12px]'>
        <p className='text-2xl font-bold'>Staking</p>
        <div className='flex gap-[120px]'>
            <div className='flex gap-[3px]'><p className=' text-[#626262]  text-lg font-normal'>Stake</p>
            <p className=' text-[#626262]   text-lg font-normal'>$RAVEN</p></div>
            <div className='flex'>
                <button className='py-[4px] px-[12px] rounded-l-md bg-white text-black'>Deposit</button>
                <button className='bg-[#050805] border border-[#121C16] b px-[12px] rounded-r-md'>Withdraw</button>
            </div>
        </div>
        <div className='mt-[40px]'>
            <div className='p-[10px] bg-[#050805]  border border-[#121C16] rounded-[8px]'>
            <div className='flex gap-[160px]'>
                <p className='text-[#646262]'>amount of deposit</p>
               <div className='flex gap-[10px]'>
                <div> <img className='w-[30px] h-[30px]' src='/assets/images/RavenLogo.png' /></div>
                <p>Raven</p>
               </div>
            </div>
            </div>
        </div>
        <div className='mt-[40px]'>
            <div className='p-[10px] bg-[#050805]  border border-[#121C16] rounded-[8px]'>
           <p className='text-center text-[#626262] text-xl font-normal'>Stake</p>
            </div>
        </div>
        <div className='mt-[40px]'>
            <div className='p-[10px] bg-[#050805]  border border-[#121C16] rounded-[8px]'>
                <div className='flex'>
                <div className='max-w-[200px] mx-auto'>
                    <div><img className='pt-[14px]' src='/assets/images/0.00.png' /></div>
                    <p className='py-[14px]'>Balanced</p>

                </div>
                <div className='max-w-[200px] mx-auto'>
                    <div><img className='pt-[14px]' src='/assets/images/0.00.png' /></div>
                    <p className='py-[14px]'>Staked</p>

                </div>
                </div>
          
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default SPage
