import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Product from '../Product/Product'

function Design() {

  const userId = localStorage.getItem('id')
  const [designs, setDesigns] = useState([])

  const getAllDesign = async (e) => {
      try {
          let res = await axios.get(`http://localhost:3001/designs/all/${userId}`)
          console.log(res.data.designs,'res')
          if(res)
            setDesigns(res.data.designs)
      } catch (e) {
          console.log(e);
      } 
  }

useEffect( () => {
  getAllDesign()
}, [])

  return (
    <div><Product designs={designs} />
    </div>
  )
}

export default Design