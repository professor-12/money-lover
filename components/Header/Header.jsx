import React from 'react'
import HomePAgeLogo from '../SVGS/HomePAgeLogo'
import Link from 'next/link'
import Flag from '../SVGS/Flag'
const Header = () => {
      return (
            <header className='py-6  bg-white flex justify-between items-center lg:px-0'>
                  <HomePAgeLogo />
                  {/* Large Sreen */}
                  <nav className='hidden md:flex'>
                        <ul className='flex space-x-8 text-lg font-[500] text-neutral-600/90'>
                              <li><Link href={""}>About us</Link></li>
                              <li><Link href={"/"} >Career</Link></li>
                              <li><Link className='flex items-center space-x-2' href={"/"}><Flag /><span>Vietnamese</span></Link></li>
                        </ul>

                  </nav>

                  {/* Small screen */}
                  <nav className='lg:hidden'>

                  </nav>
            </header>
      )
}

export default Header