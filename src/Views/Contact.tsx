import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import QRcode from 'react-qr-code';
import { NavLink } from 'react-router-dom'
import house from '../Images/house.png'

const Contact: React.FC = () => {
const [qrsize, setqrsize] = useState(87)

useEffect(() => {
    if(Number(window.innerWidth) < 920){
        setqrsize(50)
    }
  }, [setqrsize])

    return (
        <StyledContainer>
            <StyledSectionsHolder>
        <StyledSections to='/' exact><img width="30px" height="30px" src={house} alt='house to show that this is a button to home'/></StyledSections>
        </StyledSectionsHolder>
        <StyledHeader>Links and their respective QRCodes for contacting me.</StyledHeader>
            <StyledInnerContainer>
                <StyledInnerGrouping>
            <QRcode size={qrsize} value={"https://t.me/SamInTaiwan"} />
            <StyledLink target='_self' href="https://t.me/SamInTaiwan">Telegram</StyledLink>
            </StyledInnerGrouping>
            <HorizontalSpacer />
            <StyledInnerGrouping>
            <QRcode size={qrsize} value={"https://line.me/R/ti/p/samdepramere"} />
            <StyledLink target='_self' href="https://line.me/R/ti/p/samdepramere">Line</StyledLink>
            </StyledInnerGrouping>
            <HorizontalSpacer />
            <StyledInnerGrouping>
            <QRcode size={qrsize} value={"https://wa.me/886975139873"} />
            <StyledLink target='_self' href="https://wa.me/886975139873">WhatsApp</StyledLink>
            </StyledInnerGrouping>
            </StyledInnerContainer>
            <StyledInnerContainer>
            <StyledInnerGrouping>
            <QRcode size={qrsize} value={"https://twitter.com/CryptoOwl3"} />
            <StyledLink target='_self' href="https://twitter.com/CryptoOwl3">Twitter</StyledLink>
            </StyledInnerGrouping>
            <HorizontalSpacer />
            <StyledInnerGrouping>
            <QRcode size={qrsize} value={"87daysofsam@gmail.com"} />
            <StyledLink target='_self' href="mailto:87daysofsam@gmail.com">Email</StyledLink>
            </StyledInnerGrouping>
            </StyledInnerContainer>
        </StyledContainer>
    )
}

const StyledHeader = styled.h3`
    text-align: center;
`

const HorizontalSpacer = styled.div`
width: 25px;
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
const StyledInnerContainer = styled.div`
display: flex;
flex-flow: row;
margin-top: 40px;
justify-content: space-around;
justify-items: space-around;
width: 100%;
height: 15%;
`
const StyledLink = styled.a`
@media (min-width: 900px){
text-decoration: none;
color: unset;
border: 1px solid white;
border-radius: 8px;
width: 83px;
&:hover {
    background-color: white;
    color: #008B8B;
}
}
@media (max-width: 900px){
    text-decoration: none;
    color: unset;
    border: 1px solid white;
    border-radius: 8px;
    width: 46px;
    }
`
const StyledInnerGrouping = styled.div`
width: 33%;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
`

const StyledSections = styled(NavLink)`
    height: 10%;
    width: 10%;
    padding:2%;
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

export default Contact