import React, { useEffect, useState } from 'react'

import Card from './Components/Card.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './Components/Footer.js';


const api_key = "38193929-1d69f12857f7aaf0692ee60c3"

const App = () => {

  const [photo, setPhoto] = useState('image')
  const [galery, setGalery] = useState([])
  const [search, setSearch] = useState('')
  
  

  useEffect(() => {
    
    fetch(`https://pixabay.com/api/?key=${api_key}&q=${photo}`)
      .then(res => res.json())
      .then(data =>
        setGalery(data.hits))
  },[])

  const handleChange = (event) => {
    setSearch(event.target.value);
    
  };

  const handleSubmit = (event) => {
    
    
      
      fetch(`https://pixabay.com/api/?key=${api_key}&q=${search}`)
         .then(res => res.json())
         .then(data =>
           setGalery(data.hits))
      console.log(photo);
    

    
  
    event.preventDefault();
    
  };


  return (
    <div className='hi'>
      <header className="p-3 text-bg-dark ">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
       <h2> <i className="fa-solid fa-feather-pointed"></i> </h2>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          
          <li><a href="#" className="nav-link px-2 text-white">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Rating</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>
         
        <form className="nav col-12 col-lg-auto me-lg-auto mb-2 d-flex  justify-content-center mb-md-0 f" role="search" onSubmit={handleSubmit} >
          <div className='input-group w-auto"'>
                  <input
                  onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Example input"
          aria-describedby="button-addon1"
        />
        <button className="btn btn-outline-light me-2 BtN" type="submit" id="button-addon1" data-mdb-ripple-color="dark">
            search
        </button>
        </div>
        </form>

      </div>
    </div>
  </header>


  





     <div className=' p-3'>
       <Card galery={galery}/>
    
     </div>
    

     <Footer/>



    </div>
  )
}

export default App