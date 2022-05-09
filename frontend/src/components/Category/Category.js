import React from 'react'
import { useParams } from 'react-router-dom'

function Category() {

    const {category} = useParams()
    const data = [{
        name: 'Alicia Delucia',
        image: '/images/bedroom.jpg'
    },{
        name: 'Alicia Delucia',
        image: '/images/bedroom.jpg'
    },{
        name: 'Alicia Delucia',
        image: '/images/bedroom.jpg'
    },{
        name: 'Alicia Delucia',
        image: '/images/bedroom.jpg'
    },{
        name: 'Alicia Delucia',
        image: '/images/bedroom.jpg'
    },{
        name: 'Alicia Delucia',
        image: '/images/bedroom.jpg'
    },{
        name: 'Alicia Delucia',
        image: '/images/bedroom.jpg'
    }]
  return (
    <div>
        <h1>Designs for {category} </h1>
        <div className="row">
            {data.map((design,index) => {
                return (
               <div key={index} className='col-lg-3 d-flex flex-column text-center'>
               <span className='mb-1'>
                   {design.name}
               </span>
               <img className='imgCategory' src={`${design.image}`} alt='' />
           </div>)
            })}
        </div>
    </div>
  )
}

export default Category