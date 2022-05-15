import React, { useState } from 'react'
import './Product.css'

function Product() {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [showForm, setShowForm] = useState(false)
    
    const addDesign = (e) => {
        e.preventDefault()
        const obj = { title, category, description }
        console.log(obj)
    }

    return (
        showForm ? 
        (
            <div className='containerLogin text-white container-fluid d-flex flex-row align-items-center text-align-center'>
            <div className='d-flex flex-column align-items-center'>
            <div className='text-center textContainer'>
                <h1> Add your design here </h1>
            </div>
            <div className='shadow-sm rounded-lg formContainer'>
                <form id='loginIdForm' onSubmit={(e) => {
                }}>
                    <div className='mb-4'>
                        <label>Title</label>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            className='form-control mt-2'
                            placeholder='Input your design here'
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label>Category</label>
                        <select
                            onChange={(event) => setCategory(event.target.value)}
                            value={category}
                            type='select'
                            id='category'
                            name='category'
                            className='form-control mt-2'
                        >
                            <option value="bedroom">Bedroom</option>
                            <option value="bathroom">Bathroom</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="livingRoom">Living Room</option>
                        </select>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea
                            maxLength={50}
                            type='text'
                            id='description'
                            name='description'
                            className='form-control mt-2'
                            placeholder='Describe your design here'
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>
                    <div className='d-flex justify-content-center mt-3' >
                        <button onClick={(e) => addDesign(e)} className='btn btn-lg btnLogin'>
                            Add
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>) : (
            <div  className='containerLogin text-white container-fluid' onClick={()=> setShowForm(true)}>
                <button onClick={()=> setShowForm(true)} className='btn btn-lg btnLogin btnAddDesign'>
                    Add design
                </button>
            </div>)     
    )
}

export default Product