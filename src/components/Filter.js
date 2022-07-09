import { useEffect } from 'react'
import { React } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  clearFilterButton,
  getShippingValue,
  getValuesFilter,
} from '../features/products/productsSlice'

const Filter = () => {
  const dispatch = useDispatch()
  const { category, search, company } = useSelector((state) => {
    return state.products
  })
  // handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value.toLowerCase()

    dispatch(getValuesFilter({ name, value }))
  }

  // handle shipping
  const handleShipping = (e) => {
    dispatch(getShippingValue())
  }
  useEffect(() => {}, [])
  return (
    <Wrapper>
      {/* Search input */}
      <div className='search'>
        <input
          placeholder='Search product name'
          onClick={handleShipping}
          type='text'
          name='search'
          id='search'
          value={search}
          onChange={handleChange}
        ></input>
      </div>
      {/* category input */}

      <p className='title category-p'>category</p>

      <div className='category'>
        <div className='btn-box'>
          {category.map((item, index) => {
            return (
              <button
                className='btn category-btn'
                type='button'
                value={item}
                name='filterCategory'
                key={index}
                onClick={handleChange}
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>
      <div className='company-shipping'>
        {/* select input options */}
        <div className='options '>
          <p>company</p>
          <select
            onChange={handleChange}
            name='selectCompany'
            id='selectCompany'
          >
            {company.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>
        <div className='radio'>
          <label htmlFor='shipping' className='shipping'>
            Shipping Available
          </label>
          <input
            onClick={handleShipping}
            type='checkbox'
            name='shipping'
            id='shipping'
          />
        </div>
      </div>

      <div className='btn-container box-2'>
        <button
          onClick={() => {
            dispatch(clearFilterButton())
          }}
          type='button'
          className='btn'
        >
          clear filter
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 2rem;
  .search {
    text-align: center;
  }
  .category-p {
    margin: 0 auto;
    color: var(--primary-8);
  }
  .category {
    margin: 0 auto;
  }
  .category-btn {
    margin: 4px;
  }
  .btn-box {
    text-align: center;
  }
  .company-shipping {
    display: flex;
    justify-content: space-between;
    max-width: var(--fixed-width);
    margin: 10px auto;
  }
  .box-2 {
    padding-left: 12rem;
  }
  .options {
    p {
      margin: 0;
      color: var(--primary-8);
    }
  }
  .shipping {
    color: var(--primary-8);
  }
`
export default Filter
