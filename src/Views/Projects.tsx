import React, { useState } from 'react'
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

const Projects: React.FC = () => {
    const [currentModal, setCurrentModal] = useState(0);
    const [currentModalText, setCurrentModalText] = useState(0);

    const ModalClicked = function (event: any) {
        const cur_proj = event.target.id;
        setCurrentModal(1)
        switch (cur_proj) {
            case '1':
                setCurrentModalText(1)
                break;
            case '2':
                setCurrentModalText(2)
                break;
            case '3':
                setCurrentModalText(3)
                break;
            case '4':
                setCurrentModalText(4)
                break;
            case '5':
                setCurrentModalText(5)
                break;
            case '6':
                setCurrentModalText(6)
                break;
            case '7':
                setCurrentModalText(7)
                break;
            default:
                setCurrentModalText(0)
                break;
        }
    }

    const ModalCleared = function (event: any) {
        setCurrentModal(0)
        setCurrentModalText(0)
    }

    return (
        <StyledContainer>
            <StyledSectionsHolder>
                <StyledSections to='/' exact><img width="30px" height="30px" src={house} alt='house to show that this is a button to home' /></StyledSections>
            </StyledSectionsHolder>
            <StyledHeader>My personal Projects,<br />some for fun and some for utility.</StyledHeader>
            <StyledInnerContainer>
                <StyledInnerGrouping>
                    <StyledProjImg src={jojo} alt='Website I built in React for a Taiwanese business.' />
                    <StyledLink href="https://jo-jo.club/">Visit</StyledLink>
                    <StyledInfo id="1" onClick={ModalClicked}>More Info</StyledInfo>
                </StyledInnerGrouping>
                <StyledInnerGrouping>
                    <StyledProjImg src={rain} alt='A project i built because i really wanted to create a rain effect without complications.' />
                    <StyledLink href="https://codepen.io/888_owl/full/zYrMORa">Visit</StyledLink>
                    <StyledInfo id="2" onClick={ModalClicked}>More Info</StyledInfo>
                </StyledInnerGrouping>
                <StyledInnerGrouping>
                    <StyledProjImg src={weather} alt='A project i built to learn about api calls and conditional rendering.' />
                    <StyledLink href="https://codepen.io/888_owl/full/vRPgOQ">Visit</StyledLink>
                    <StyledInfo id="3" onClick={ModalClicked}>More Info</StyledInfo>
                </StyledInnerGrouping>
            </StyledInnerContainer>
            <StyledInnerContainer>
                <StyledInnerGrouping>
                    <StyledProjImg src={wiki} alt='Project i built to practice working with large volumes of data, in api calls.' />
                    <StyledLink href="https://codepen.io/888_owl/full/wjGNgr">Visit</StyledLink>
                    <StyledInfo id="4" onClick={ModalClicked}>More Info</StyledInfo>
                </StyledInnerGrouping>
                <StyledInnerGrouping>
                    <StyledProjImg src={randomQuote} alt='A project i built to learn about jquery and accessing arrays to call data.' />
                    <StyledLink href="https://codepen.io/888_owl/full/BryRmx">Visit</StyledLink>
                    <StyledInfo id="5" onClick={ModalClicked}>More Info</StyledInfo>
                </StyledInnerGrouping>
                <StyledInnerGrouping>
                    <StyledProjImg src={movieselector} alt='A little widget i built because my wife and i have a hard time choosing movies.' />
                    <StyledLink href="https://codepen.io/888_owl/full/BaKJdVy">Visit</StyledLink>
                    <StyledInfo id="6" onClick={ModalClicked}>More Info</StyledInfo>
                </StyledInnerGrouping>
            </StyledInnerContainer>
            <StyledInnerContainer>
                <StyledInnerGrouping>
                    <StyledProjImg src={rotatingowl} alt='A project i built to teach my friend about the box-model and how to use animations and adding javascript.' />
                    <StyledLink href="https://codepen.io/888_owl/full/GRZvNVw">Visit</StyledLink>
                    <StyledInfo id="7" onClick={ModalClicked}> More Info</StyledInfo>
                    {/* <Tooltip>Try clicking the owl!</Tooltip> */}
                </StyledInnerGrouping>
            </StyledInnerContainer>
            {currentModal !== 0 && <StyledBackDrop onClick={ModalCleared}>
            {currentModalText === 1 && <StyledModal>This is a freelance website I built to the specifications of the owner, I had originally built it in HTML CSS and vanilla Javascript, however I decided to rebuild it with React hooks in the event the owner ever wanted to change anything or add pages it would be a simple matter now.</StyledModal>}
            {currentModalText === 2 && <StyledModal>I saw a rain animation on a website a few months ago and I got very interested in how it worked and felt I had to try it out and this is the result of what I learned in researching that.</StyledModal>}
            {currentModalText === 3 && <StyledModal>This project is a weather app to get your local weather, it taught me a lot about api calls and setting up localising changes such as celcius and fahrenheit</StyledModal>}
            {currentModalText === 4 && <StyledModal>This project is a search bar powered by the WikiPedia api.</StyledModal>}
            {currentModalText === 5 && <StyledModal>When i first started learning to code, I came accross this project from free code camp which is a random quote generator.</StyledModal>}
            {currentModalText === 6 && <StyledModal>My wife and I always have trouble choosing what movie to cross off of her must see list, so in order to ease the proccess I decided to build this!</StyledModal>}
                {currentModalText === 7 && <StyledModal>This rotating owl was built so i could show my friend about the box model and how it works. I also made the owl with a pixel art program, Try clicking it to see something interesting!</StyledModal>}
            </StyledBackDrop>
            }
        </StyledContainer>
    )
}
const StyledBackDrop = styled.div`
background-color: rgba(0,0,0,0.6);
width: 100%;
height: 100%;
position: absolute;
left: 0;
top: 0;
`

const StyledModal = styled.div`
z-index: 3;
background-color: #006464;
width: 50%;
height: 50%;
position: absolute;
top:25%;
left:25%;
display: flex;
justify-content: center;
justify-items: center;
align-content: center;
align-items: center;
`

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
&:hover {
    z-index: 3;
    width: 350px;
    height: 175px;
}
}
@media (max-width: 900px){
    width: 75px;
    height: 37.5px;
    }
`

const StyledInfo = styled.h4`
@media (min-width: 900px){
    cursor: pointer;
    padding: 4px;
    width: 140px;
    text-decoration: none;
    color: yellow;
    &:hover {
        background-color: white;
        color: #006464;
    }
    }
    @media (max-width: 900px){
        padding: 2px;
        width: 65px;
        text-decoration: none;
        color: yellow;
        }
`

const StyledLink = styled.a`
@media (min-width: 900px){
padding: 4px;
width: 140px;
text-decoration: none;
color: yellow;
&:hover {
    background-color: white;
    color: #006464;
}
}
@media (max-width: 900px){
    padding: 2px;
    width: 65px;
    text-decoration: none;
    color: yellow;
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
background-color: #006464;
`
export default Projects;