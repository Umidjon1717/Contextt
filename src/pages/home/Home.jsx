import React, { useEffect, useState } from 'react'
import Products from '../../components/products/Products'
import axios from '../../api'

const Home = () => {
  const [data, setData] = useState(null)

  useEffect(()=>{
    axios
      .get("/products")
      .then(res=> setData(res?.data))
  }, [])

  return (
    <div id='home'>
      <Products data={data?.products}/>
    </div>
  )
}

export default Home

