import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='bg-[#010101] flex-1 w-full'>
                <Navbar />
                <div >{children}</div>
                <Footer />
            </div>

        </div>
    )
}

export default Layout
