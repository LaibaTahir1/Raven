import React from 'react'

function Footer() {
  return (
    <div>
      <div className='mt-[50px] text-white'>
            <div className='p-[10px] bg-black'>
                <div className='flex justify-between '>
                    <div>
                        <img src='/assets/images/Socials.png' alt='' />
                    </div>
                    <div>
                        <img src='/assets/images/Contractaddress.png' alt='' />
                    </div>
                </div>
                <div className='flex justify-between pt-[10px]'>
                    <div className='flex gap-[24px] text-[#5A6658] text-xl font-normal'>
                        <p>Twitter</p>
                        <p>Telegram</p>
                        <p>Gitbook</p>
                    </div>
                    <p className='text-[#5A6658] text-xl font-normal'>0x235fd84d843254s841ed</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer
