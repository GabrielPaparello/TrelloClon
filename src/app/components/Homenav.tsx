import React from 'react'
import Image from 'next/image'
import "../globals.css";

const Homenav = () => {
  return (
        <nav className="flex ">
          <aside>
            <Image src='/assets/logo.png' alt='logoBrand' width={59} height={59}/>
            <h2 className={`raleway`}>BoardStack</h2>
          </aside>
          <ul>
          <li>
          </li>

          </ul>
        </nav>

)
}

export default Homenav