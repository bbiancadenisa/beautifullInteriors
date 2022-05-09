import React from 'react'

function Product() {
    return (
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
                                // value={userEmail}
                                // onChange={(event) => handleFormComplete(event)}
                            />
                        </div>
                        <div className='mb-4'>
                            <label>Category</label>
                            <select
                                type='select'
                                id='category'
                                name='category'
                                className='form-control mt-2'
                            >
                                <option>Bedroom</option>
                                <option>Bathroom</option>
                                <option>Kitchen</option>
                                <option>Living Room</option>
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
                                // value={userPassword}
                                // onChange={(event) => handleFormComplete(event)}
                            />
                        </div>
                        <div className='d-flex justify-content-center mt-3' >
                            <button className='btn btn-lg btnLogin'>
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Product