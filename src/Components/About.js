import React, { useEffect, useState } from 'react'



function About() {
    const [playing, setPlaying] = useState(true);
    useEffect(()=>{
        setPlaying("autoplay");
    } )
    
    return (
        <div><div className='mt-[50px] text-white max-w-[450px]'>
        <div className='p-[12px]   bg-[#040B07] rounded-xl'>
            <h1 className='font-bold text-2xl'>RavenFund NFT Pass</h1>
            <p className='text-[#626262] text-lg font-normal pt-[4px]'>Unlock Premium Benefits</p>
            <div className='pt-[12px]'>

             <video className='px-[50px] mb-[20px]'

      autoPlay={playing}
      onPause={() => setPlaying(false)}
      onPlay={() => setPlaying(true)}
    >
      <source src="/assets/videos/Ravenfund.mp4" type="video/mp4" />
    </video></div>
            
            <div className='py-[21px] px-[163px]  '>
                <button className='text-[#627E68] text-lg font-normal px-[15px] border border-[#121A16] hover:bg-[#060F09] py-[4px] rounded-tl-xl rounded-br-xl'>Subscribe</button>
            </div>
        </div>
        
  

  
   
          
        
    </div>
   
    </div>
    )
}

export default About
