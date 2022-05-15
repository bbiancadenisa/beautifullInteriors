import axios from 'axios'
import React, { useState } from 'react'
import CategoryCard from '../Home/CategoryCard'
import './Product.css'

function Product({designs}) {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('bedroom')
    const [description, setDescription] = useState('')
    const [showForm, setShowForm] = useState(false)
    const idUser = localStorage.getItem('id')

    const addDesign = async (e) => {
        e.preventDefault()
        const obj = { 
            title: title, 
            category: category, 
            description: description,
            userId: idUser
        }
        console.log(obj)
        try {
            let res = await axios.post('http://localhost:3001/designs/new', obj)
            console.log(res);
        } catch (e) {
            console.log(e);
        } 
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
            <div className='containerLoginDesigns text-white container-fluid'>
                <button onClick={()=> setShowForm(true)} className='btn btn-lg btnLogin btnAddDesign'>
                    Add design
                </button>
                <div>
                {designs.map((design, index) => {
                    return (
                       <div>
                           <h2>{design.title}</h2>
                           <img className='imgCategory' src="/images/kitchen.jpg" alt='' />
                       </div>
                    )
                })}
                </div>
            </div>)     
    )
}

export default Product