import React, { useContext } from 'react'
import { Contexts } from '../components/context'
import Product from '../components/Product'
import { ClipLoader } from 'react-spinners'
export default function Home(){
    const {products,err}=useContext(Contexts)
  return (
    <>
    <h1 className='text-center mt-25 text-2xl font-semibold'>OUR PRODUCTS ARE THE BEST</h1>
    <div className=' flex flex-wrap gap-x-4 gap-y-4 mt-6 px-1 justify-center'>
      {err !==''?<div className='flex flex-col items-center mt-50'><p className=' text-2xl text-red-500 mb-9'>Check your internet connection</p> <ClipLoader color=''/></div> :''}
        {products?products.map((product)=><Product key={product.id} product={product}/>):<p>Nothing in here. It is empty</p>}
    </div>
    </>
  )
}

