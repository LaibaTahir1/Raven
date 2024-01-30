import React from 'react'

function SubHeading() {
  return (
    <div className='text-white mt-[50px] max-w-[430px]'>
     <div className='p-[12px]'>
     <h1 className='text-2xl font-bold'>Staking</h1>
     <p className='text-[#626262] font-normal text-lg'>Stake $RAVEN for revenue shareing</p>
     <div className='mt-[12px] px-[88px]'>
        <img  className='' src='/assets/images/blocks.gif' alt=' ' />
     </div>
     <div className='mt-[20px]'>
        <p className='text-[#626262] text-base font-normal'>Get a bonus on your staking revenue when you hold an NFT Pass. The higher the tier, the bigger the bonus</p>

     </div>
     <div className='mt-[12px]'>
        <div className='pt-[12px]'>
            <div className='flex justify-between'>
                <p className='text-lg font-medium'>Pool Share</p>
                <p className='text-lg font-medium text-[#3DC874] ' >5.04%</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-lg font-medium'>Boost Level </p>
               <div className='flex gap-[5px]'>
               <p className='text-lg font-medium ' >Tier 3</p>
               
               <div><img className='w-[20px] h-[20px] pt-[6px]' src='/assets/images/Coin.gif' alt='' /></div>
               </div>
            </div>
            <p className='text-lg font-normal'>Eligible? (12h stake time & 25k+ $RAVEN)</p>
            

        </div>
     </div>
     </div>
    </div>
  )
}

export default SubHeading
