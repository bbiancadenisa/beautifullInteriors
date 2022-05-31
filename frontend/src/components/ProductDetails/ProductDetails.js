import React from 'react'
import './ProductDetails.css'
function ProductDetails({design, user}) {
  return (
    <div className='text-white container-fluid d-flex flex-column containerCategory'>
        <div className='closeButton'>
            <span> X </span>
        </div>
        <div className='d-flex justify-content-between'>
            <div>
                <span className='designUserName'>{user.userName} </span>
                <div className='designDescription'>{design.description}</div>
            </div>
            <img className='imgDesignDetail' src={`${design.image}`} alt='' />
            
        </div>
        
    </div>
  )
}

export default ProductDetails