import React from 'react'
import {motion} from 'framer-motion'

const Navbar = () => {
  const pages = ["Home", "Work", "Contact"]
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] '>
        <div className='flex justify-end items-center h-full px-20'>
          {pages.map(page => (
            <motion.div>
              <a key={page} href={page == "Home"? '/':`/${page}`} 
              className='text-right text-2xl px-5 hover:'
              >
                {page}
              </a>
            </motion.div>
          ))}
        </div>
    </div>
  )
}

export default Navbar