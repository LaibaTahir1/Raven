import React from 'react'

function Discription() {
  return (
    <div>
      <div className='mt-[24px] text-white max-w-[450px]  bg-[#040B07] rounded-xl'>
        <div className='p-[12px]'>
            <p className='text-2xl font-bold '>Your Revenue Dashboard</p>
            <p className='pt-[4px] text-[#626262] text-lg font-normal'>Track and Claim Your Profits</p>
            <div className='my-[24px]' ><img className='px-[100px]' src='/assets/images/greenCoin.gif' alt='' /></div>
        </div>
        <div className='my-[24px] px-[12px]'>
        <div className='flex justify-between'>
                <p className='text-lg font-medium'>Current Revenue</p>
                <p className='text-lg font-medium text-[#3DC874]' >$453.56</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-lg font-medium'>Total Earned</p>
                <p className='text-lg font-medium text-[#3DC874]' >$1,325.03</p>
            </div>
            <div className='py-[21px] px-[163px] '>
                <button className='text-[#627E68] text-lg font-normal px-[15px] border border-[#121A16] hover:bg-[#060F09] py-[4px] rounded-tl-xl rounded-br-xl'>Claim</button>
            </div>

        </div>

    </div>
    </div>
  )
}

export default Discription
