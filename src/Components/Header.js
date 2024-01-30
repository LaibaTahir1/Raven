import React from 'react'

function Header() {
    return (
        <div className='mt-[50px] text-white max-w-[360px] '>
            <div className='p-[10px]'>
                <h2>RAVENS NEST</h2>
                <p className='pt-[4px] max-w-[330px] text-[15px] font-normal text-[#B1B1B1]'>Track analytics, view vital information and renew nft boost uptime at the nest.</p>
                <div className='mt-[24px]'>
                    <div className='flex gap-[10px]'>
                        <div className='w-[20px] h-[20px]'> <img src='/assets/images/Docs.gif' alt='' /></div>
                        <p>Docs</p>
                    </div>
                </div>
                <div className='mt-[24px] mb-[12px]'>
                    <p className='text-lg font-normal'>Raven Information</p>
                </div>
                <div className='mt-[10px]'>
                    <p className='text-[#D9E8D7] text-lg font-normal'>1,000,000,000</p>
                    <p className='pt-[2px] text-[#9A9A9A] text-sm font-normal'>Supply</p>

                </div>
                <div className='mt-[12px]'>
                   <div className='flex gap-[10px]'>
                   <p className='text-xl font-normal'>1.2M</p>
                   <p className='text-[#3DC874] text-xl font-normal'>(+3.5%)</p>
                   </div>
                   <p className='text-[#9A9A9A] font-normal text-sm'>Marketcap (24h)</p>
                </div>

                <div className='mt-[12px]'>
                   <div className='flex gap-[10px]'>
                   <p className='text-xl font-normal'>104.5K</p>
                   <p className='text-[#3DC874] text-xl font-normal'>(+1.4%)</p>
                   </div>
                   <p className='text-[#9A9A9A] font-normal text-sm'>Volume (24h)</p>
                </div>

                <div className='mt-[12px]'>
                   <div className='flex gap-[10px]'>
                   <p className='text-xl font-normal'>$1,539.30 </p>
                   <p className='text-[#3DC874] text-xl font-normal'>(+385.53%)</p>
                   </div>
                   <p className='text-[#9A9A9A] font-normal text-sm'>RavenFund Profit (24h)</p>
                  
                </div>
            </div>
        </div>
    )
}

export default Header
