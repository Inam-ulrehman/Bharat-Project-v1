import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProductsHolder = ({ id, name, company, price, category, image }) => {
  return (
    <Wrapper className='form'>
      <div className='image-container'>
        <img src={image} alt='' />
      </div>
      <div className='footer'>
        <p>{name}</p>
        <p>{(price * 2) / 100}</p>
      </div>
      <Link className='btn style-btn' to={`${id}`} type='submit'>
        More Info
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.form`
  margin-top: 10px;
  margin-bottom: 0;
  max-width: 180px;
  height: 210px;
  display: grid;
  justify-content: center;
  padding: 0px;
  border-radius: var(--radius);
  transition: var(--transition);

  :hover {
    cursor: pointer;
    box-shadow: var(--shadow-4);
  }

  .image-container {
    margin: 0 auto;
    width: 180px;
    height: auto;
    overflow: hidden;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 5px;

    p {
      margin: 0;
    }
  }
  .style-btn {
    margin: 0;
    text-align: center;
  }
`
export default ProductsHolder
