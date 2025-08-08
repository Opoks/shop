import React, {useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../components/slices/Cart-slice'
import { Contexts } from '../components/context'

export default function Cart(){
    const[totalPrice,setTotalPrice]=useState(0)
    const {cart}= useSelector(state=>state)
    const dispatch=useDispatch()

   
    useEffect(()=>{
        setTotalPrice(cart.reduce((acc,curr)=>acc + curr.price, 0))
    },[cart])

    function handleRemove(id){
     dispatch(removeFromCart(id))
    }
    
  return (
    <div className=' mt-22 flex flex-col items-center '>
       {cart&&cart.length?(<div>
        <p className=' text-center font-bold text-2xl'>Your cart</p>
        <div className=' pt-4 flex flex-wrap gap-x-2  justify-center'>
            {
                cart.map((item,index)=><div key={index} className=' flex gap-4 mb-7 border-3 overflow-hidden px-2 py-4 rounded-xl w-[350px] font-semibold'>
                    <LazyLoadImage src={item.image} width={40} alt={item.title}/>
                <div className='w-full'>
                   <p>{item.title}</p> 

                   <div className=' flex items-center justify-between'>
                   <p>GHC {item.price}</p>
                   <button onClick={()=>handleRemove(item.id)} className=' truncate border-2 rounded-md mt-2 hover:text-amber-50 hover:scale-120 transition ease-in-out px-2 py-1 cursor-pointer font-semibold ' >Remove From cart</button>
                   </div>
                 
                </div>
                </div>)
            }
        </div>
       
       </div>):(<div className=' mt-30 flex flex-col items-center '>
        <p className=' text-3xl font-semibold'>The cart is empty...</p>
       <Link to='/'>< button className=' bg-[#ECF1AF] text-[#0A4646] py-2 px-4 rounded-md mt-7 font-bold cursor-pointer'>Shop Now</button></Link> 
        </div>)}

        <div className=' flex flex-col border-4 rounded-xl w-[70%] p-3 font-bold m-auto mt-7'>
            <p className='text-center'>Total Details</p>
            <p>Total price: GHC {totalPrice.toFixed(2)}</p>
            <button className=' bg-[#ECF1AF] text-[#0A4646] py-2 px-4 rounded-md mt-7 font-bold cursor-pointer self-center disabled:bg-neutral-400' disabled={totalPrice === 0?true:false}>PROCEED TO PAYMENT</button>
        </div>
    </div>
  )
}

