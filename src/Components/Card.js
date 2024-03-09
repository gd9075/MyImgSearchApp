import React from 'react'
import "../Style/Card.css"
const Card = ({galery}) => {
  
    
  return (
    <div className=' ImgCard ' >
        {
        galery.map((item) => {

            
          return (
            
            
                <div className='Card_Div 'key={item.id} >
                <img src={item.webformatURL}></img>
                 </div>
          
          )
        })
      }
     
    </div>
  )
}

export default Card