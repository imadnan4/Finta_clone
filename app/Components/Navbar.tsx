import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'


const Navbar = () => {
  const links = [
    { name: 'Guide', href: '/guide' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Founders', href: '/founders' },
    { name: 'Docs', href: '/docs' },
    { name: 'Login', href: '/login' }
  ]



  return (
    <div className='flex items-center justify-between py-2 px-4'>
      <Link href="/">
        <Image draggable={false} loading='lazy' src={logo} alt="Finko Logo" width={60} height={60} />
      </Link>

      <div className="flex gap-6 justify-center items-center">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="text-black font-medium hover:text-neutral-600 transition-colors duration-200">
            {link.name}
          </Link>
        ))}
       <button className="bg-[#2579F4] px-4 text-white py-2 font-medium rounded-lg shadow-lg text-shadow-md tracking-wider">
         Get Started
       </button>
      </div>
    </div>
  )
}

export default Navbar
