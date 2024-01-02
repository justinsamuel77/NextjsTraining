import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <ul>
      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/contact'>Contact</Link>
      </li>
      <li>
        <Link href='/help'>Help</Link>
      </li>
      <li>
        <Link href='/document'>Document</Link>
      </li>
    </ul>
  )
}

export default Navbar