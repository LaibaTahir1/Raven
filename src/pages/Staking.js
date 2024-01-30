import React from 'react'
import Layout from '../layout/Layout'
import Sidebar from '../Components/Sidebar'
import SPage from '../Components/SPage'
import NFTcard from '../Components/NFTcard'

function Staking() {
  return (
    <div>
       <div>
     <div className='bg-[#010101]  text-white p-[24px]'>
     <div className='max-w-[1380px] mx-auto w-full'>
     <Layout>
       <div className='mt-[50px]'>
      <div className='grid sm:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]'>
      <Sidebar />
      <SPage />
      <NFTcard />
      </div>
     </div>
     </Layout>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Staking
