import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Category.css'

function Category() {

    const [designs, setDesigns] = useState([])
    const {category} = useParams()
   
    const getDesigns = async () => {
        try {
            let res = await axios.get(`http://localhost:3001/designs/category/${category.toLowerCase()}`)
            if(res)
              setDesigns(res.data)
        } catch (e) {
            console.log(e);
        } 
    }

    useEffect(() => {
        getDesigns()
    }, [])

  return (
    
      <div className='text-white container-fluid d-flex flex-column align-items-center text-align-center containerCategory'>
        <h1 className='title'>Designs for {category} </h1>
        <div className="row d-flex">
            {designs.map((design,index) => {
                return (
               <div key={index} className='col-lg-3 d-flex flex-column text-center align-items-center mb-4'>
               <span className='mb-1'>
                   {design.title}
               </span>
               <img className='imgCategory' src="/images/kitchen.jpg" alt='' />
           </div>)
            })}
        </div>
        </div>
    
  )
}

export default Category