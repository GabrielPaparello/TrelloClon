import React from 'react'
import Image from 'next/image'
import "../globals.css";

const Homenav = () => {
  return (
        <nav className="flex justify-between bg-[#191552]">
          <aside className='flex'>
            <Image src='/assets/logo.png' alt='logoBrand' width={59} height={59}/>
            <h2 className={`raleway text-center`}>BoardStack</h2>
          </aside>
          <ul>
          <li>
            <h4>Link 1</h4>
          </li>
          <li>Link 2</li>
          </ul>
        </nav>

)
}

export default Homenav