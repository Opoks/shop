
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import store from './components/slices'
import Header from './components/Header'
import { useEffect, useState, lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { Contexts } from './components/context'
import {BounceLoader, ClipLoader} from 'react-spinners'
function App() {
  const Home=lazy(()=>import('./pages/Home'))
const Cart=lazy(()=>import('./pages/Cart'))
 const[products,setProducts]=useState([])
 const[loading,setLoading]=useState(false)
 const[err, setErr]=useState('')

 async function fetchProducts(){
  setLoading(true)
  try {
    const response= await fetch('https://fakestoreapi.com/products')
    const data= await response.json()
    if(data){
      
      setProducts(data)
      setLoading(false)
      setErr('')
    }
  } catch (error) {
    setErr(error)
    setLoading(false)
  }
 
 }

 useEffect(()=>{
  fetchProducts()
 },[])
  return (
    <>
   
      <BrowserRouter>
      <Provider store={store}>
      <Contexts.Provider value={{products,loading,err}}>
      <Header/>
    
      <Routes>
        
        <Route path='/' element={ <Suspense fallback={<ClipLoader color='' className='absolute top-90 left-90'/>}><Home/></Suspense>}/>
        <Route path='cart' element={<Suspense fallback={<ClipLoader color='' className='absolute top-90 left-90'/>}><Cart/></Suspense>}/>
      </Routes>
     
      </Contexts.Provider>
      </Provider>
      </BrowserRouter>
      
    </>
  )
}

export default App
