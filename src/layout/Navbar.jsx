import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className='max-w-[1380px] mx-auto w-full text-white '>
      <div className=' flex justify-between pt-[24px]'>
       <div> <img className='px-[10px]'  src='/assets/images/Raven.png' alt='' /></div>
        <div className='flex gap-[24px] '>
       <div className='flex gap-[12px] pb-[10px] pt-[14px]'>
       <Link to={'/'}  > <h1 className='text-sm font-normal text-white hover:text-[#123B22]'>Nest</h1></Link>
      <Link to={'/staking'} > <h1 className='text-sm font-normal hover:text-[#123B22]'>Staking</h1> </Link>
      
       </div>
       <h1 className='px-[24px] pt-[14px] text-sm font-normal'>Connect</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
