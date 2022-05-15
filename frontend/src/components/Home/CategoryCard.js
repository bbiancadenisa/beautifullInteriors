import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({title, image}) => {
    const navigate = useNavigate()

    const handleNavigation = (category) => {
        navigate(`/category/${category}`)
    }
  return (
    <div onClick={() => handleNavigation(title)} className='d-flex flex-column text-center'>
        <span className='mb-1'>
            {title}
        </span>
        {image}
    </div>
  )
}

export default CategoryCard