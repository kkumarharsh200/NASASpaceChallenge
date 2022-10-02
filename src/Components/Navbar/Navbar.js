import React from 'react'
import './Navbar.css'
import SearchComponent from '../SearchComponent/SearchComponent'

function Navbar() {
  return (
    <div className='navbar text-2xl'>
        <span class="title">Space<b class = "explorer">Explorer</b></span>
        {/* <SearchComponent/> */}
    </div>
  )
}

export default Navbar