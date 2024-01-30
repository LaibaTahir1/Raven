import React from 'react'
import Layout from '../layout/Layout'
import About from '../Components/About';
import Discription from '../Components/Discription';

import Header from '../Components/Header';

import SubHeading from '../Components/SubHeading';

function Home() {
  return (
    <div>
      <div className=' bg-[#010101]  ' >
      <div className='bg-[#010101] max-w-[1380px] mx-auto w-full p-[24px]'>
        <Layout>
        <div className=' sm:mx-auto block md:block lg:flex '>
         <div className='pr-[50px]'> <Header /></div>
          <div className=' sm:block md:flex gap-[24px]'>
            <div className='block'>
            <About />
            <Discription />
            </div>
            <SubHeading />
          </div>
        </div>
        </Layout>
      </div>
    </div>
    </div>
  )
}

export default Home
