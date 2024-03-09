import React from 'react'
import "../Style/Footer.css"
const Footer = () => {
  return (
    <div className='FDiv'><footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0  text-white">© 2023 Company, Inc</p>
    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
       <h2> <i className="fa-solid fa-feather-pointed"></i> </h2>
        </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2  text-white">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2  text-white">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2  text-white">Rating</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2  text-white">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2  text-white">About</a></li>
    </ul>
  </footer></div>
  )
}

export default Footer