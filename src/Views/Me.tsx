import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import house from '../Images/house.png'
import me from '../Images/me.png'

const Me: React.FC = () => {

    const [myAge, setMyAge] = useState(String)

    const getAge = useCallback(async () => {
        const countDown = new Date("Sep 13 1994 12:18:27").getTime();
        setInterval(function () {
            var now = new Date().getTime();
            var distance = now - countDown;
            setMyAge((distance / 31557600000).toFixed(7))
        }, 100);
    }, [setMyAge])

    useEffect(() => {
        getAge()
    })

    return (
        <StyledContainer>
            <StyledSectionsHolder>
                <StyledSections to='/' exact><img width="30px" height="30px" src={house} alt='house to show that this is a button to home' /></StyledSections>
            </StyledSectionsHolder>
            <Styledimg src={me} alt='Sam Swift' />
            <StyledHeader>About me</StyledHeader>
            <StyledCountdownText>{myAge}</StyledCountdownText>
            <StyledP>As long as I can remember I have had a passion for technology and for building, whether it was legos, houses or widgets just for me.</StyledP>
            <StyledP>My long term goal is to never stop learning new programming languages and find a way to use BlockChain for good.</StyledP>
            <StyledP> I see its limitless potential when it comes to a fair and just society, although it is currently tightly entangled with finance and not being truly utilized.</StyledP>
            <StyledP>I am a passionate person and I have many hobbies, such as snorkeling, hiking, making bad jokes that only I laugh at, reading about robotics and other new and exciting technologies, and most importantly eating.</StyledP>
        </StyledContainer>
    )
}

const StyledCountdownText = styled.span`
   margin-top: 25px;
   font-size: 36px;
   font-weight: 700;
`
const StyledHeader = styled.h3`
    text-align: center;
`

const StyledSections = styled(NavLink)`
    height: 10%;
    width: 10%;
    padding:2%;
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
const Styledimg = styled.img`
margin-left:auto;
margin-right:auto;
@media (min-width: 900px){
 width:150px;
 height:150px;
}
@media (max-width: 900px){
    width:50px;
    height:50px;
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
const StyledP = styled.p`
    margin-top: 25px;
    text-align: center;
`

export default Me;