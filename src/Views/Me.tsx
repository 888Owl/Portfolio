import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import Container from './Components/Container'

const Me: React.FC = () => {
    //1580896800
    const [myAge, setMyAge] = useState(String)

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
        }, 200);
    }, [setMyAge])

    useEffect(() => {
        getAge()
    })

    return (
        <Container>
            <StyledHeader>About me</StyledHeader>
            <StyledCountdownText><StyledCountdownTitle>My age: </StyledCountdownTitle>{myAge}</StyledCountdownText>
            <br/>
            <StyledtopP>As long as I can remember, I have had a passion for technology and for building, whether it was legos, houses or widgets just for me.</StyledtopP>
            <StyledP>My long term goal is to never stop learning new programming languages and find a way to use BlockChain for good.</StyledP>
            <StyledP> I see its limitless potential when it comes to a fair and just society, although it is currently tightly entangled with finance and not being truly utilized.</StyledP>
            <StyledP>I am a passionate person and I have many hobbies, such as snorkeling, archery, hiking, making bad jokes that only I laugh at, reading about robotics and other new and exciting technologies, I am also open water dive certified and most importantly I love eating (我愛臭豆腐).</StyledP>
            <StyledP>I currently spend my free time on week nights trying to progress at learning backend technologies (Node.JS & MySQL for now) and studying Mandarin. During my weekends I spend time on either my hobbies or exploring more of Taiwan. </StyledP>
            <StyledNote>I am legally able to work in Taiwan and the United States of America.</StyledNote>
        </Container>
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

const StyledtopP = styled.p`
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
`

const StyledP = styled.p`
    margin-top: 25px;
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
`

const StyledNote = styled.p`
    font-size: 20px;
    margin-top: 25px;
    text-align: center;
    text-decoration: underline;
    margin-left: 20%;
    margin-right: 20%;
`

export default Me;