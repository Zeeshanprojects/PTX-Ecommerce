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
 <nav className="navbar navbar-expand-lg navbar-light  ">
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
          <Link className="nav-link active" aria-current="page" href="#">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="#">
            SHOP
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link active dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            PAGES
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" href="#">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Another action
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Something else here
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" href="#">
            BLOG
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" href="#">
        CONTACT
          </Link>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>


   </>
  )
}
