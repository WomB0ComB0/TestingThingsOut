import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {setClick(!click)};
  const closeMobileMenu = () => {setClick(false)};
  return (
    <>
      <nav className='w-full z-20 sticky'>
        <a href="." rel='noopener'>
          <img src="" alt="logo" />
        </a>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
        </ul>
        <div className=''>
          <button>
            <a href="">Sign Up</a>
          </button>
        </div>
      </nav>
    </>
  )
}