import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';



const Box = styled(motion.li)`
width: 20rem;
height: 38rem;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 2rem 2rem 1.5rem 2rem;
margin-right: 8rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;
&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 1px solid ${props => props.theme.text};
}
`

const ProjectImage = styled.img`
  width: 100%;
  height: 13rem;
  object-fit: cover;
  border-radius: 0 30px 0 30px;
  margin-bottom: 1.5rem;
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`
const Tags = styled.div`
border-top: 2px solid ${props =>props.theme.body};
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid ${props =>props.theme.text};
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`

const Link = styled.a`
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(1em + 0.5vw);
transition: all 0.2s ease;
${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};
}
&:hover {
  box-shadow: 0 0 5px ${props => props.theme.text},
              0 0 15px ${props => props.theme.text},
              0 0 25px ${props => props.theme.text};
  transform: scale(1.05);
}
&:active {
  box-shadow: 0 0 10px ${props => props.theme.text},
              0 0 20px ${props => props.theme.text},
              0 0 30px ${props => props.theme.text};
  transform: scale(0.95);
}
`

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  & > svg {
    transition: filter 0.2s, transform 0.2s;
  }
  &:hover > svg {
    filter: drop-shadow(0 0 5px ${props => props.theme.text})
            drop-shadow(0 0 15px ${props => props.theme.text})
            drop-shadow(0 0 25px ${props => props.theme.text});
    transform: scale(1.05);
  }
  &:active > svg {
    filter: drop-shadow(0 0 10px ${props => props.theme.text})
            drop-shadow(0 0 20px ${props => props.theme.text})
            drop-shadow(0 0 30px ${props => props.theme.text});
    transform: scale(0.95);
  }
  ${Box}:hover & > svg {
    fill: ${props => props.theme.text};
  }
`

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, name, description, tags, demo, github, imgSrc} = props.data;

    return (
        <Box key={id} variants={Item}>
            <ProjectImage src={imgSrc} alt={name} />
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <Tags>
            {
                    tags.map((t,id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer>
                <Link href={demo} target="_blank" rel="noopener noreferrer">
                    Visit
                </Link>
                <Git href={github} target="_blank" rel="noopener noreferrer">
                    <Github width={30} height={30} />
                </Git>
            </Footer>
        </Box>
    )
}

export default Card