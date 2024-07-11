import React from 'react'
import Image from 'next/image'
import "../globals.css";

const Homenav = () => {
  return (
        <nav className="flex ">
          <aside className='flex'>
            <Image src='/assets/logo.png' alt='logoBrand' width={59} height={59}/>
            <h2 className={`raleway`}>BoardStack</h2>
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