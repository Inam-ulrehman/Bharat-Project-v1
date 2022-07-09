import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import HomePageOne from '../components/homePages/HomePageOne'
import HomePageThree from '../components/homePages/HomePageThree'
import HomePageTwo from '../components/homePages/HomePageTwo'

const Home = () => {
  return (
    <Wrapper>
      <HomePageOne />
      <HomePageTwo />
      <HomePageThree />
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  @media (max-width: 768px) {
    margin-top: 1.6rem;
  }
  @media (min-width: 768px) {
    margin-top: -3rem;
  }
`

export default Home
