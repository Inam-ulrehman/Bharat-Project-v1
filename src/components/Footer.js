import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper className='title'>
      CopyRight <FaRegCopyright /> {new Date().getFullYear()} Bharat Marketing
      publishers All rights reserved.
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  margin-top: 3rem;
  background-color: var(--primary-1);
  padding: 1rem;
  margin-bottom: 0;
`

export default Footer
