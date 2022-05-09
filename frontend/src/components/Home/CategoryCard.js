import React from 'react'

const CategoryCard = ({title, image}) => {
  return (
    <div className='d-flex flex-column text-center'>
        <span className='mb-1'>
            {title}
        </span>
        {image}
    </div>
  )
}

export default CategoryCard