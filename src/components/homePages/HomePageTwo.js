import React from 'react'
import { useState } from 'react'

import styled from 'styled-components'
import { homePageTwo } from '../../utils/data'

import HomePageTwoHolder from './HomePageTwoHolder'

const HomePageTwo = () => {
  const [data] = useState(homePageTwo)

  return (
    <Wrapper>
      <hr />
      <h3 className='title pageTwo-header'>
        Online <span> / Store</span>
      </h3>
      <div className='title-underline'></div>
      <div className='pageTwo-container'>
        {data.map((item) => {
          return <HomePageTwoHolder key={item.id} {...item} />
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .pageTwo-header {
    span {
      color: var(--primary-5);
    }
  }
  .pageTwo-cart {
    text-align: center;
    background-color: var(--white);
    border-radius: var(--radius);
    max-width: var(--fixed-width);
    margin: 1em auto;
    margin-top: 3rem;
    transition: var(--transition);
    box-shadow: var(--shadow-1);
    .title {
      color: var(--primary-8);
    }
    .paragraph {
      color: var(--grey-5);
    }
    :hover {
      box-shadow: var(--shadow-3);
      cursor: pointer;
    }

    .pageTwo-icon {
      font-size: 2.5rem;
      margin-top: -1.8rem;
      color: var(--primary-5);
      background-color: var(--grey-2);
      padding: 0.5rem;
      border-radius: 50%;
      cursor: pointer;
    }
    @media (min-width: 768px) {
      max-width: 350px;
    }
  }
  .pageTwo-container {
    @media (min-width: 768px) {
      display: grid;

      grid-template-columns: 1fr 1fr;
    }
  }
`
export default HomePageTwo
