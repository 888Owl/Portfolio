import React from 'react'
import styled from 'styled-components'
import InnerGroup from './Components/InnerGroup'
import Container from '../Components/Container'
import HomeButton from '../Components/HomeButton'

import jojo from '../../Images/jojo.png'
import weather from '../../Images/weather.png'
import rain from '../../Images/rain.png'
import movieselector from '../../Images/movieselector.png'
import randomQuote from '../../Images/randomQuote.png'
import wiki from '../../Images/wiki.png'
import rotatingowl from '../../Images/rotatingowl.png'
import schools from '../../Images/schools.png'

const Projects: React.FC = () => {

    return (
        <Container>
            <HomeButton />
            <StyledHeader>My personal Projects,<br />some for fun and some for utility.</StyledHeader>
            <StyledInnerContainer>
                <InnerGroup
                    Isrc={jojo}
                    Ialt='Website I built in React for a Taiwanese business.'
                    Ihref="https://jo-jo.club/"
                    ModalText="This is a freelance website I built to the specifications of the owner, I had originally built it in HTML CSS and vanilla Javascript, however I decided to rebuild it with React hooks in the event the owner ever wanted to change anything or add pages it would be a simple matter now."
                />
                <InnerGroup
                    Isrc={rain}
                    Ialt='A project i built because i really wanted to create a rain effect without complications.'
                    Ihref="https://codepen.io/888_owl/full/zYrMORa"
                    ModalText="I saw a rain animation on a website a few months ago and I got very interested in how it worked and felt I had to try it out. After some research most of the working examples I saw seemed to be very over built so I decided to rebuild it with simple HTML, CSS and Javascript utilizing CSS Keyframes."
                />
                <InnerGroup
                    Isrc={weather}
                    Ialt='A project i built to learn about api calls and conditional rendering.'
                    Ihref="https://codepen.io/888_owl/full/vRPgOQ"
                    ModalText="This project is a weather app to get your local weather, it taught me a lot about api calls and setting up localising changes such as celcius and fahrenheit. I built this application early on in learning to code so it was one of my first opportunities to work with a dynamic API, and taught me about the Geolocation API, and the limitations of it. I built this Project with HTML, CSS, Javascript, jQuery, AJAX, and the WeatherBit weather API."
                />
            </StyledInnerContainer>

            <HorizontalSpacer />

            <StyledInnerContainer>
                <InnerGroup
                    Isrc={wiki}
                    Ialt='Project i built to practice working with large volumes of data, in api calls.'
                    Ihref="https://codepen.io/888_owl/full/wjGNgr"
                    ModalText="This project is a search bar powered by the WikiPedia api. This was my first opportunity to work with a truly massive API and learn about narrowing down the results to only what I truly needed. I built this with HTML, CSS, Javascript, jQuery, AJAX and the WikiPedia API."
                />
                <InnerGroup
                    Isrc={randomQuote}
                    Ialt='A project i built to learn about jquery and accessing arrays to call data.'
                    Ihref="https://codepen.io/888_owl/full/BryRmx"
                    ModalText="When I first started learning to code, I came accross this project from free code camp which is a random quote generator, it really interested me and was enjoyable to build because it reminded me of the old basic flash games I used to play. I built this with HTML, CSS, Javascript and jQuery"
                />
                <InnerGroup
                    Isrc={movieselector}
                    Ialt='A little widget i built because my wife and i have a hard time choosing movies.'
                    Ihref="https://codepen.io/888_owl/full/BaKJdVy"
                    ModalText="My wife and I always have trouble choosing what movie to cross off of her must see list, so in order to ease the proccess I decided to build this! I made this with HTML, CSS and Javscript."
                />
            </StyledInnerContainer>

            <HorizontalSpacer />

            <StyledInnerContainer>
                <InnerGroup
                    Isrc={rotatingowl}
                    Ialt="A project i built to teach my friend about the box-model and how to use animations and adding javascript."
                    Ihref="https://codepen.io/888_owl/full/GRZvNVw"
                    ModalText="This rotating owl was built so I could show my friend about the box model, basic animations and dynamic elements. I also made the owl with a pixel art program, Try clicking it to see something interesting! I made this with HTML, CSS and Javascript."
                />
                <InnerGroup
                    Isrc={schools}
                    Ialt='A Website i designed and built the frontend for, tracking the progress of various installations through out 115 schools. built with HTML CSS and Javascript, with a python backend.'
                    Ihref="http://163.30.45.228/login"
                    ModalText="A Website i designed and built the frontend for, tracking the progress of various installations through out 115 schools. Built with HTML, CSS, Javascript and Ajax, with a Python backend."
                />
                <EmptyGroup />
            </StyledInnerContainer>
        </Container>
    )
}

const StyledInnerContainer = styled.div`
display: flex;
flex-flow: row;
margin-top: 40px;
justify-content: space-around;
justify-items: space-around;
width: 100%;
height: 15%;
`

const EmptyGroup = styled.div`
width: 33%;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
`

const StyledHeader = styled.h3`
    text-align: center;
`
const HorizontalSpacer = styled.div`
@media (min-width: 900px){
width:100%;
height:1%;
margin-top: 4%;
}
@media (max-width: 900px){
width:100%;
height:1%;
}
`
export default Projects