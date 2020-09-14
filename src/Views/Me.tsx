import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import house from '../Images/house.png'
import me from '../Images/me.png'

const Me: React.FC = () => {
    //1580896800
    const [myAge, setMyAge] = useState(String)
    const [yearsCoding, setyearsCoding] = useState(String)
    const [yearsBuilding, setyearsBuilding] = useState(String)

    const getAge = useCallback(async () => {
        const countDown = new Date("Sep 13 1994 12:18:27").getTime();
        const countDown2 = new Date("Feb 05 2020 10:00:00").getTime();
        const countDown3 = new Date("Nov 14 2013 08:00:00").getTime();
        setInterval(function () {
            var now = new Date().getTime();
            var distance = now - countDown;
            var distance2 = now - countDown2;
            var distance3 = now - countDown3;
            setMyAge((distance / 31557600000).toFixed(7))
            setyearsCoding((distance2 / 31557600000).toFixed(7))
            setyearsBuilding((distance3 / 31557600000).toFixed(7))
        }, 200);
    }, [setMyAge,setyearsCoding,setyearsBuilding])

    useEffect(() => {
        getAge()
    })

    return (
        <StyledContainer>
            <StyledSectionsHolder>
                <StyledSections to='/' exact><img width="30px" height="30px" src={house} alt='house to show that this is a button to home' /></StyledSections>
            </StyledSectionsHolder>
            <StyledHeader>About me</StyledHeader>
            <Styledimg src={me} alt='Sam Swift' />
            <StyledCountdownText><StyledCountdownTitle>My age: </StyledCountdownTitle>{myAge}</StyledCountdownText>
            <StyledCountdownText><StyledCountdownTitle>Years building Profesionaly: </StyledCountdownTitle>{yearsBuilding}</StyledCountdownText>
            <StyledCountdownText><StyledCountdownTitle>Years coding Profesionaly: </StyledCountdownTitle>{yearsCoding}</StyledCountdownText>
            <br/>
            <StyledtopP>As long as I can remember I have had a passion for technology and for building, whether it was legos, houses or widgets just for me.</StyledtopP>
            <StyledP>My long term goal is to never stop learning new programming languages and find a way to use BlockChain for good.</StyledP>
            <StyledP> I see its limitless potential when it comes to a fair and just society, although it is currently tightly entangled with finance and not being truly utilized.</StyledP>
            <StyledP>I am a passionate person and I have many hobbies, such as snorkeling, hiking, making bad jokes that only I laugh at, reading about robotics and other new and exciting technologies, and most importantly eating.</StyledP>
        </StyledContainer>
    )
}

const StyledCountdownText = styled.span`
   font-size: 36px;
   font-weight: 700;
`
const StyledCountdownTitle = styled.span`
   font-size: 24px;
   font-weight: 700;
`
const StyledHeader = styled.h3`
    @media (min-width: 900px){
        margin-top: 50px;
    text-align: center;
       }
       @media (max-width: 900px){
        margin-top:550px;
        text-align: center;
       }
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
max-height: 100%;
overflow-y: scroll;
height: 90%;
background-color: #006464;
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
const StyledtopP = styled.p`
    text-align: center;
`
const StyledP = styled.p`
    margin-top: 25px;
    text-align: center;
`

export default Me;