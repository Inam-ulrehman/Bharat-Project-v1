import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getAllProductsThunk } from './features/products/productsSlice'

import {
  SharedLayout,
  LandingPage,
  ErrorPage,
  Home,
  About,
  Contact,
  Products,
  SingleProduct,
} from './pages'

const App = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state)
  const { page } = products

  useEffect(() => {
    dispatch(getAllProductsThunk())
    // eslint-disable-next-line
  }, [page])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:Id' element={<SingleProduct />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
