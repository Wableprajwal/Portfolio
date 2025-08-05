import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import ParticleComponent from '../subComponents/ParticleComponent';
//import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/space suit reading.png'
import BigTitle from '../subComponents/BigTitle';
import uiucLogo from '../assets/Images/uiuc.png';
import sppuLogo from '../assets/Images/sppu.jpg';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  left: calc(5rem + 5vw);
  top: 18rem;
  width: 80vw;
  height: 60vh;
  gap: 2rem;
  z-index: 3;
`

const MainBox = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 38vw;
  height: 100%;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  background: transparent;
`

const SvgTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.2rem;
  font-size: 2.5rem;
`

const EducationCard = styled.div`
  background: rgba(20, 20, 20, 0.95);
  border-radius: 18px;
  padding: 2.5rem 2rem;
  width: 48vw;
  margin: 0 auto;
  margin-top: 4rem;
  color: #fff;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.25);
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

const EduEntry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  position: relative;
`

const EduIcon = styled.div`
  font-size: 2.2rem;
  margin-right: 1.2rem;
  margin-top: 0.2rem;
`

const EduContent = styled.div`
  flex: 1;
  min-width: 0;
`

const EduTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
`

const EduDegree = styled.div`
  font-size: 1.05rem;
  font-weight: 500;
  color: #bdbdbd;
  margin-bottom: 0.7rem;
`

const EduDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.98rem;
  color: #bdbdbd;
  margin-bottom: 0.2rem;
  gap: 1.2rem;
`

const EduLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

const EduDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

const EduGPA = styled.div`
  min-width: 70px;
  text-align: right;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-left: 1.5rem;
  margin-top: 0.2rem;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #444;
  margin: 1.5rem 0 0.5rem 0;
`


const EducationPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <MainContainer>
          <MainBox>
            <SvgTop><img src={uiucLogo} alt="UIUC Logo" style={{height: '12rem', width: 'auto'}} /></SvgTop>
            University of Illinois Urbana-Champaign<br/>
            🎓 Master of Computer Science (MCS)<br/>
            🎯 GPA: 4.0 / 4.0<br/>
            <br/>
            Relevant Coursework:<br/>
            Database Systems<br/>
            Applied Machine Learning<br/>
            Cloud Computing Applications<br/>
            Advanced Computer Networks<br/>
            Human-Centered Machine Learning<br/>
            The Art of Web Programming<br/>
            <br/>
            Course Assistant:<br/>
            CS 411: Database Systems (Summer 2025)<br/>
            CS 222: Software Design Lab (Spring 2025)<br/>
          </MainBox>
          <MainBox>
            <SvgTop><img src={sppuLogo} alt="SPPU Logo" style={{height: '12rem', width: 'auto'}} /></SvgTop>
            Savitribai Phule Pune University<br/>
            🎓 Bachelor of Technology in Computer Science<br/>
            🎯 GPA: 9.81 / 10.0<br/>
            <br/>
            Relevant Coursework:<br/>
            Data Structures and Algorithms<br/>
            Operating Systems<br/>
            Artificial Intelligence & Deep Learning<br/>
            Object-Oriented Programming<br/>
            Database Management Systems<br/>
            Discrete Mathematics<br/>
            Blockchain Technology<br/>
          </MainBox>
        </MainContainer>

        <BigTitle text="EDUCATION" top="10%" left="5rem" />


        </Box>

        </ThemeProvider>
        
    )
}

export default EducationPage