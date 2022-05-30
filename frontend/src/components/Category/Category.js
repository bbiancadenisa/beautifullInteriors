import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../ProductDetails/ProductDetails'
import './Category.css'

function Category() {

    const [designs, setDesigns] = useState([])
    const [design, setDesign] = useState({})
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

    const getDesign = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3001/designs/details/${id}`)
            if(res)
              setDesign(res.data)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getDesigns()
    }, [])

  return (
    <div>
        {design && Object.keys(design).length?  (<ProductDetails design={design.design} user={design.user}/>) : 
        (
        <div className='text-white container-fluid d-flex flex-column align-items-center text-align-center containerCategory'>
            <h1 className='title'>Designs for {category} </h1>
            <div className="row d-flex">
                {designs.map((design,index) => {
                    return (
                <div onClick={() => getDesign(design._id)} key={index} className='col-lg-3 d-flex flex-column text-center align-items-center mb-4'>
                <span className='mb-1'>
                    {design.title}
                </span>
                <img className='imgCategory' src={`${design.image}`} alt='' />
            </div>)
                })}
            </div>
        </div>
        )}
    </div>
    
  )
}

export default Category