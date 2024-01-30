import React from 'react'

function Sidebar() {
    return (
        <div className='max-w-[350px] p-[10px]'>
            <div className='p-[10px]'>
                <div className='flex gap-[12px]'>
                    <div><img src='/assets/images/RavenLogo.png' alt='' /> </div>
                    <div className='flex gap-[12px]'>
                        <div className='block'>
                            <p className='text-xl font-semibold'>RAVEN</p>
                            <p className='pt-[3px] text-lg font-medium text-[#969696]'>$0.085</p>
                        </div>
                        <p className='text-xl font-semibold text-[#3DC874]' >(+2.12%)</p>
                    </div>
                </div>

                <div className='mt-[24px]'>
                    <p className='text-[#D4FFD0] text-xl font-medium'>RAVEN STAKING</p>
                    <p className='text-[#B1B1B1] text-[15px] font-normal'>Dive deeper into the RavenFund ecosystem by staking your $RAVEN. </p>
                    <div className='mt-[24px]'>
                        <p className='text-[#B1B1B1] text-[15px] font-normal'>Passive Income: By staking, you're automatically eligible for a share of the ecosystem's revenue.</p>
                        <p className='text-[#585252] text-[12px] font-normal'> (Minimum 25,000* $RAVEN is required to be eligible to the Revenue Sharing)</p>
                    </div>

                </div>
                <div className='mt-[8px]'>
                    <p className='text-[#C1C1C1] text-[14px] font-semibold'> NFT Boost: Holders of our NFT Pass get bonus</p>
                    <p className='text-[#B1B1B1] text-[16px] font-normal'> rewards, amplifying their returns.</p>
                </div>
                <div className='mt-[8px]'>
                    <p className='text-[#C1C1C1] text-[16px] font-semibold'>Enhanced Security: Your stake strengthens the RavenFund network</p>
                </div>
                <div className='mt-[24px]'>
                    <div className='flex gap-[10px]'>
                        <div><img src='/assets/images/StakingLogo.png' /></div>
                        <p className='text-sm font-normal text-[#9A9A9A]'>Staking</p>
                    </div>
                    <div className='flex gap-[10px] mt-[8px]'>
                        <div><img src='/assets/images/NFT.png' /></div>
                        <p  className='text-sm font-normal pt-[2px] text-[#9A9A9A]'>NFT</p>
                    </div>
                    <div className='flex gap-[10px] mt-[8px]'>
                       <div > <img src='/assets/images/BuyRAVEN.png' /></div>
                        <p className='text-sm font-normal text-[#9A9A9A]'>Buy RAVEN</p>
                    </div>
                </div>
                <div className='mt-[24px] mb-[12px]'>
                    <p className='text-lg font-normal text-[#D9E8D7]'>Staking stats</p>

                </div>
                <div className='mt-[12px]'>
                    <p className='text-[#3DC874] text-xl font-normal'>25.5%</p>
                    <div className='flex gap-[3px] pt-[3px]'>
                    <p className='text-sm font-normal text-[#9A9A9A]'>APR Est.</p>
                   <div> <img className='pt-[2px]' src='/assets/images/QuestionMark.png' alt='' /></div>
                    </div>
                    
                </div>
                <div className='mt-[12px]'>
                    <p className='text-[#3DC874] text-xl font-normal'>$1.2M</p>
                    <div className='flex gap-[3px] pt-[3px]'>
                    <p className='text-sm font-normal text-[#9A9A9A]'>Staking TVL</p>
                   <div> <img className='pt-[2px]' src='/assets/images/QuestionMark.png' alt='' /></div>
                    </div>
                </div>
                <div className='mt-[12px]'>
                    <p className='text-lg font-normal'>None</p>

                </div>
                <div className='mt-[12px]'>
                <div className='flex gap-[3px] pt-[3px]'>
                    <p className='text-sm font-normal text-[#9A9A9A]'>NFT Boost Active?</p>
                   <div> <img className='pt-[2px]' src='/assets/images/QuestionMark.png' alt='' /></div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Sidebar
