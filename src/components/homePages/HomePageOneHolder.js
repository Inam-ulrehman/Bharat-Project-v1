import React from 'react'
import styled from 'styled-components'

const HomePageOneHolder = ({ id, index }) => {
  return (
    <Wrapper className={` btn ${index === id && 'changeBackGround'}`}></Wrapper>
  )
}

const Wrapper = styled.div`
  .changeBackGround {
    background-color: var(--primary-8);
  }
`
export default HomePageOneHolder
