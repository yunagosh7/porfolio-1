import React from 'react'
import "./Navbar.css"

const Navbar = ({isScrolling}) => {
    const toTheTop = ()=>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
      }
  return (
    <nav className="navbar" onClick={toTheTop}>
    <div className='navbar-logo'>
        Vila Juan Cruz
    </div>

    </nav>
  )
}

export default Navbar