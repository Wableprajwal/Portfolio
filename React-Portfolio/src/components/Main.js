import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
import { motion } from 'framer-motion'

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,g5,h6{
    font-family:'karla', sans-serif;
    font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
`
const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
transition: all 0.3s ease;

&:hover {
  text-shadow: 0 0 10px ${props => props.theme.text},
               0 0 20px ${props => props.theme.text},
               0 0 30px ${props => props.theme.text};
  transform: scale(1.1);
}

&:active {
  text-shadow: 0 0 15px ${props => props.theme.text},
               0 0 25px ${props => props.theme.text},
               0 0 35px ${props => props.theme.text};
  transform: scale(0.95);
}
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
transition: all 0.3s ease;

&:hover {
  text-shadow: 0 0 10px ${props => props.theme.text},
               0 0 20px ${props => props.theme.text},
               0 0 30px ${props => props.theme.text};
  transform: rotate(90deg) translate(-50%, -50%) scale(1.1);
}

&:active {
  text-shadow: 0 0 15px ${props => props.theme.text},
               0 0 25px ${props => props.theme.text},
               0 0 35px ${props => props.theme.text};
  transform: rotate(90deg) translate(-50%, -50%) scale(0.95);
}
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 1;
transition: all 0.3s ease;

&:hover {
  text-shadow: 0 0 10px ${props => props.click ? props.theme.body : props.theme.text},
               0 0 20px ${props => props.click ? props.theme.body : props.theme.text},
               0 0 30px ${props => props.click ? props.theme.body : props.theme.text};
  transform: translate(-50%, -50%) rotate(-90deg) scale(1.1);
}

&:active {
  text-shadow: 0 0 15px ${props => props.click ? props.theme.body : props.theme.text},
               0 0 25px ${props => props.click ? props.theme.body : props.theme.text},
               0 0 35px ${props => props.click ? props.theme.body : props.theme.text};
  transform: translate(-50%, -50%) rotate(-90deg) scale(0.95);
}
`
const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`
const EDUCATION = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index: 1;
transition: all 0.3s ease;

&:hover {
  text-shadow: 0 0 10px ${props => props.click ? props.theme.body : props.theme.text},
               0 0 20px ${props => props.click ? props.theme.body : props.theme.text},
               0 0 30px ${props => props.click ? props.theme.body : props.theme.text};
  transform: scale(1.1);
}

&:active {
  text-shadow: 0 0 15px ${props => props.click ? props.theme.body : props.theme.text},
               0 0 25px ${props => props.click ? props.theme.body : props.theme.text},
               0 0 35px ${props => props.click ? props.theme.body : props.theme.text};
  transform: scale(0.95);
}
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
transition: all 0.3s ease;

&:hover {
  text-shadow: 0 0 10px ${props => props.theme.text},
               0 0 20px ${props => props.theme.text},
               0 0 30px ${props => props.theme.text};
  transform: scale(1.1);
}

&:active {
  text-shadow: 0 0 15px ${props => props.theme.text},
               0 0 25px ${props => props.theme.text},
               0 0 35px ${props => props.theme.text};
  transform: scale(0.95);
}
`
const rotate = keyframes`
form{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
  animation: ${rotate} infinite 1.5s linear;
  transition: all 0.3s ease;
}

&>:last-child{
  display: ${props => props.click ? 'none' : 'inline-block'};
  padding-top: 1rem;
  transition: all 0.3s ease;
}

&:hover {
  &>:first-child {
    transform: scale(1.1);
  }
  &>:last-child {
    transform: scale(1.1);
  }
}

&:active {
  &>:first-child {
    transform: scale(0.95);
  }
  &>:last-child {
    transform: scale(0.95);
  }
}
`
const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
        <DarkDiv click={click}/>
        <Container>
        <LogoComponent theme={click ? 'dark' : 'light'}/>
        <SocialIcons theme={click ? 'dark' : 'light'}/>
        <Center click = {click}>
          <YinYang onClick ={()=> handleClick()}  width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
          <span>click here</span>
        </Center>

        <Contact target="_blank" to={{pathname:"mailto:prajwal.21911184@viit.ac.in"}}>
          <motion.h2
          initial={{
            y:-200,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          >
            Chat with me..
          </motion.h2>
        </Contact>
        <BLOG to="/blog">
          <motion.h2
          initial={{
            y:-200,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          >
            Blog
          </motion.h2>
        </BLOG>
        <WORK to="/projects" click = {click}>
          <motion.h2
          initial={{
            y:-200,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          >
            Projects
          </motion.h2>
        </WORK>
        <BottomBar>
        <EDUCATION to="/education" click = {click}>
          <motion.h2
          initial={{
            y:200,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          >
            Education
          </motion.h2>
        </EDUCATION>
        <SKILLS to="/skills">
          <motion.h2
          initial={{
            y:200,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          >
            My Skills.
          </motion.h2>
        </SKILLS>
        </BottomBar>
        </Container>
        {click ? <Intro click={click} /> : null}
    </MainContainer>
  )
}

export default Main