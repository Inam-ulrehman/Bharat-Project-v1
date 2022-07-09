import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const MobileNavbarComponent = ({ path, title, icon, values, setValues }) => {
  return (
    <Wrapper>
      <NavLink onClick={() => setValues(!values)} to={path}>
        {icon}
        {title}
      </NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.li``

export default MobileNavbarComponent
