import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import { NavLink } from 'react-router-dom'

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;
position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
text-decoration: none;
transition: all 0.3s ease;

&:hover {
  text-shadow: 0 0 10px ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body},
               0 0 20px ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body},
               0 0 30px ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  transform: scale(1.05);
}

&:active {
  text-shadow: 0 0 15px ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body},
               0 0 25px ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body},
               0 0 35px ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  transform: scale(0.95);
}
`

const LogoLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`

const LogoComponent = (props) => {
  return (
    <LogoLink to="/">
      <Logo color={props.theme}>
        Prajudice
      </Logo>
    </LogoLink>
  )
}

export default LogoComponent