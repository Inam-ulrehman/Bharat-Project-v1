import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getSortValues } from '../features/products/productsSlice'

const Sort = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    dispatch(getSortValues({ name, value }))
  }
  return (
    <form onChange={handleChange}>
      <Wrapper>
        <label htmlFor='sort ' className='sort'>
          Sort By
        </label>
        <select name='sort' id='sort'>
          <option value='default'>Default</option>
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </Wrapper>
    </form>
  )
}
const Wrapper = styled.div`
  label {
    color: var(--primary-8);
  }
`
export default Sort
