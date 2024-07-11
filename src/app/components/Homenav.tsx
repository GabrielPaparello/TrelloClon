import React from 'react'
import Image from 'next/image'

const Homenav = () => {
  return (
        <nav>
            <Image src='/assets/logo.png' alt='logoBrand' width={500} height={300}/>
            <h2>BoardStack</h2>
        </nav>

)
}

export default Homenav