import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Filter, ProductsHolder, Sort } from '../components'
import Footer from '../components/Footer'
import {
  changePageIndex,
  nextPageIndex,
  prevPageIndex,
} from '../features/products/productsSlice'

const Products = () => {
  const dispatch = useDispatch()
  const { isLoading, allProducts, products, limitProducts } = useSelector(
    (state) => state.products
  )
  // index button

  const handleIndexButton = (index) => {
    dispatch(changePageIndex(index))
  }

  // next button
  const handleNextButton = () => {
    dispatch(nextPageIndex())
  }

  // handle prev button
  const handlePrevButton = () => {
    dispatch(prevPageIndex())
  }
  if (isLoading) {
    return (
      <div>
        <h3>loading....</h3>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <Wrapper>
      <div className='f-p-box'>
        <div className='filter-box'>
          <div className='filter'>
            <Filter />
          </div>
        </div>
        <div className='p-sort'>
          <Sort />
        </div>
        <div className='total'>
          <p>Total Products: {allProducts.length}</p>
          <p>TotTa Filter Products:{limitProducts.length}</p>
        </div>
        <div className='title-underline'></div>
        <div className='products'>
          <div className='p-holder'>
            {limitProducts.map((item) => {
              return <ProductsHolder key={item.id} {...item} />
            })}
          </div>
          {limitProducts.length === 0 || (
            <div className='button-holder'>
              <button type='button' onClick={handlePrevButton} className='btn'>
                prev
              </button>
              {products.map((item, index) => {
                return (
                  <button
                    onClick={() => handleIndexButton(index)}
                    key={index}
                    className='btn btn-style'
                  >
                    {index + 1}
                  </button>
                )
              })}
              <button type='button' onClick={handleNextButton} className='btn'>
                next
              </button>
            </div>
          )}
        </div>
      </div>
      <button
        style={{ position: 'fixed', bottom: '0', right: '0' }}
        className='btn'
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
      >
        Scroll up
      </button>
      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.main`
  overflow: hidden;
  @media (min-width: 768px) {
    margin-top: -2rem;
  }

  .p-sort {
    margin-top: -2rem;

    width: var(--fixed-width);
    @media (min-width: 768px) {
      text-align: center;
    }
  }

  .p-holder {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (min-width: 680px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 780px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .button-holder {
    margin-top: 1rem;
    text-align: center;
    button {
      margin-right: 1rem;
    }
  }
  .title-total {
    color: var(--primary-8);
  }
  .total {
    display: flex;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
    p {
      color: var(--primary-8);
    }
  }
`
export default Products
