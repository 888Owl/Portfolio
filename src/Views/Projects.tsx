import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import house from '../Images/house.png'
import jojo from '../Images/jojo.png'
import weather from '../Images/weather.png'
import rain from '../Images/rain.png'
import movieselector from '../Images/movieselector.png'
import randomQuote from '../Images/randomQuote.png'
import wiki from '../Images/wiki.png'
import rotatingowl from '../Images/rotatingowl.png'

const Projects: React.FC = () =>{

    return(
        <StyledContainer>
            <StyledSectionsHolder>
            <StyledSections to='/' exact><img width="30px" height="30px" src={house} alt='house to show that this is a button to home'/></StyledSections>
            </StyledSectionsHolder>
            <StyledHeader>My personal Projects,<br/>some for fun and some for utility.</StyledHeader>
            <StyledInnerContainer>
                <StyledInnerGrouping>
                <StyledProjImg src={jojo} alt='Website I built in React for a Taiwanese business.'/>
                <StyledLink href="https://jo-jo.club/">Visit</StyledLink>
                </StyledInnerGrouping>
                <StyledInnerGrouping>
                <StyledProjImg src={rain} alt='A project i built because i really wanted to create a rain effect without complications.'/>
                <StyledLink href="https://codepen.io/888_owl/full/zYrMORa">Visit</StyledLink>
                </StyledInnerGrouping>
                <StyledInnerGrouping>
                <StyledProjImg src={weather} alt='A project i built to learn about api calls and conditional rendering.'/>
                <StyledLink href="https://codepen.io/888_owl/full/vRPgOQ">Visit</StyledLink>
                </StyledInnerGrouping>
            </StyledInnerContainer>
            <StyledInnerContainer>
                <StyledInnerGrouping>
                <StyledProjImg src={wiki} alt='Project i built to practice working with large volumes of data, in api calls.'/>
                <StyledLink href="https://codepen.io/888_owl/full/wjGNgr">Visit</StyledLink>
                </StyledInnerGrouping>
                <StyledInnerGrouping>
                <StyledProjImg src={randomQuote} alt='A project i built to learn about jquery and accessing arrays to call data.'/>
                <StyledLink href="https://codepen.io/888_owl/full/BryRmx">Visit</StyledLink>
                </StyledInnerGrouping>
                <StyledInnerGrouping>
                <StyledProjImg src={movieselector} alt='A little widget i built because my wife and i have a hard time choosing movies.'/>
                <StyledLink href="https://codepen.io/888_owl/full/BaKJdVy">Visit</StyledLink>
                </StyledInnerGrouping>
            </StyledInnerContainer>
            <StyledInnerContainer>
                <StyledInnerGrouping>
                <StyledProjImg src={rotatingowl} alt='A project i built to teach my friend about the box-model and how to use animations and adding javascript.'/>
                <StyledLink href="https://codepen.io/888_owl/full/GRZvNVw">Visit</StyledLink>
                {/* <Tooltip>Try clicking the owl!</Tooltip> */}
                </StyledInnerGrouping>
            </StyledInnerContainer>
        </StyledContainer>
    )
}

// const Tooltip = styled.span`
//   visibility: hidden;
//   width: 120px;
//   background-color: black;
//   color: #fff;
//   text-align: center;
//   border-radius: 6px;
//   padding: 5px 0;
  
// `

const StyledHeader = styled.h3`
    text-align: center;
`
const StyledSections = styled(NavLink)`
    height: 10%;
    width: 10%;
    padding:2%;
`
const StyledInnerContainer = styled.div`
display: flex;
flex-flow: row;
margin-top: 40px;
justify-content: space-around;
justify-items: space-around;
width: 100%;
height: 15%;
`
const StyledProjImg = styled.img`
@media (min-width: 900px){
width: 150px;
height: 75px;
}
@media (max-width: 900px){
    width: 75px;
    height: 37.5px;
    }
`
const StyledLink = styled.a`
@media (min-width: 900px){
padding: 4px;
width: 140px;
text-decoration: none;
color: unset;
border: 1px solid white;
border-radius: 8px;
&:hover {
    background-color: white;
    color: #008B8B;
}
}
@media (max-width: 900px){
    padding: 2px;
    width: 65px;
    text-decoration: none;
    color: unset;
    border: 1px solid white;
    border-radius: 8px;
    }
`

const StyledSectionsHolder = styled.nav`
@media (min-width: 900px){
        position: absolute;
    color:unset;
    text-decoration: none;
    top: 3%;
    height: 15%;
    width: 15%;
    display: flex;
        left: 3%;
    }
    @media (max-width: 900px){
        position: absolute;
    color:unset;
    text-decoration: none;
    top: 3%;
    height: 15%;
    width: 15%;
    display: flex;
        left: 2%;
    }
`

const StyledInnerGrouping = styled.div`
width: 33%;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
`

const StyledContainer = styled.div`
display: flex;
flex-flow: column;
margin-left: auto;
margin-right: auto;
border-radius: 4px;
justify-content: center;
width: 80%;
height: 90%;
background-color: #008B8B;
`
export default Projects;