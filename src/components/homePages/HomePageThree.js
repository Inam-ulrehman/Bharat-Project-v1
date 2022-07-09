import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { homePageThree } from '../../utils/data'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

const HomePageThree = () => {
  const [reviews] = useState(homePageThree)
  const [index, setIndex] = useState(0)
  const { name, description, picture } = reviews[index]

  //  const handleNext
  const handleNext = (e) => {
    if (index >= homePageThree.length - 1) {
      return setIndex(0)
    }
    setIndex(index + 1)
  }
  // handlePrev
  const handlePrev = (e) => {
    if (index <= 0) {
      return setIndex(homePageThree.length - 1)
    }
    setIndex(index - 1)
  }
  return (
    <Wrapper>
      <hr />
      <div className='section-three'>
        <h3 className='title'>
          Customer <span> / Reviews </span>
        </h3>
        <div>
          <div className='title-underline'></div>
          <div className='pageThree-cart-handler'>
            <article className='cart'>
              <div className='pageThree-image'>
                <img src={picture} alt='' />
              </div>
              <h5>{name}</h5>
              <p>{description}</p>
            </article>
            <button onClick={handlePrev} className='btn prev'>
              <GrFormPrevious />
            </button>
            <button onClick={handleNext} className='btn next'>
              <GrFormNext />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .pageThree-image {
    max-width: 100px;
    max-height: 100px;
    margin: 0 auto;

    img {
      max-width: 100px;
      max-height: 100px;
      border-radius: 50%;
      border: 2px solid var(--primary-8);
    }
  }
  .cart {
    background: var(--primary-1);
    text-align: center;
    margin: 1rem auto;
    width: var(--fixed-width);
    padding: 1rem;
    border-radius: var(--radius);
    transition: var(--transition);
    box-shadow: var(--shadow-2);
    h5 {
      color: var(--primary-8);
    }
    p {
      color: var(--grey-6);
    }
    @media (max-width: 768px) {
      max-width: 300px;
    }
  }
  .pageThree-cart-handler {
    position: relative;
    .btn {
      position: absolute;
      svg {
        font-size: 1.5rem;
      }
    }
    .prev {
      top: 50%;
      right: 90%;
    }
    .next {
      top: 50%;
      left: 90%;
    }
  }
`
export default HomePageThree
