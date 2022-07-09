import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

const LandingPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')
    // eslint-disable-next-line
  }, [])
  return <Wrapper></Wrapper>
}
const Wrapper = styled.section`
  height: 100vh;
`
export default LandingPage
