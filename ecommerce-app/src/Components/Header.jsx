import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Images/Image'
import './Header.css'

export default function Header() {
  return (
   <>
 <div className='topbar'>
    <div className='container'>
   <p className='pt-3'> Free shipping, 30-day return or refund guarantee.</p> 

    </div>
 </div>
 <nav className="navbar navbar-expand-lg navbar-dark bg-black">
  <div className="container">
    <Link className="navbar-brand" to="#">
      <img src={Image.logo}/>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Men">
            MEN
          </Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link active" to="/Women">
            WOMEN
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Kids">
            KIDS
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Shop">
            SHOP
          </Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link active" to="#">
            LOOKBOOK
          </Link>
        </li>
     
     
       
      </ul>
    
    </div>
  </div>
</nav>


   </>
  )
}
