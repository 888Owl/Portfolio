import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import QRcode from 'react-qr-code';
        
import Container from './Components/Container'
const Contact: React.FC = () => {
    const [qrsize, setqrsize] = useState(true)

    useEffect(() => {
        if (Number(window.innerWidth) < 920) {
            setqrsize(false)
        }
    }, [setqrsize])

    return (
        <Container>
            <StyledHeader>If you can see this then you can probably already contact me however if not then here are,</StyledHeader>
            {qrsize && <StyledHeader>links and their respective QRCodes for contacting me, as well as finding me on social media.</StyledHeader>}
            {!qrsize && <StyledHeader>links for contacting me, as well as finding me on social media.</StyledHeader>}
            <StyledInnerContainer>
                <StyledInnerGrouping>
                    <StyledLink target='_self' href="https://t.me/SamInTaiwan">Telegram</StyledLink>
                    {qrsize && <QRcode size={87} value={"https://t.me/SamInTaiwan"} />}
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <StyledLink target='_self' href="https://line.me/R/ti/p/samdepramere">Line</StyledLink>
                    {qrsize && <QRcode size={87} value={"https://line.me/R/ti/p/samdepramere"} />}
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <StyledLink target='_self' href="https://wa.me/886975139873">WhatsApp</StyledLink>
                    {qrsize && <QRcode size={87} value={"https://wa.me/886975139873"} />}
                </StyledInnerGrouping>
            </StyledInnerContainer>
            <StyledInnerContainer>
                <StyledInnerGrouping>
                    <StyledLink target='_self' href="https://twitter.com/CryptoOwl3">Twitter</StyledLink>
                    {qrsize && <QRcode size={87} value={"https://twitter.com/CryptoOwl3"} />}
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <StyledLink target='_self' href="mailto:87daysofsam@gmail.com">Email</StyledLink>
                    {qrsize && <QRcode size={87} value={"87daysofsam@gmail.com"} />}
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <StyledLink target='_self' href="https://www.facebook.com/samson.swift.1">Facebook</StyledLink>
                    {qrsize && <QRcode size={87} value={"https://www.facebook.com/samson.swift.1"} />}
                </StyledInnerGrouping>
            </StyledInnerContainer>
            <StyledInnerContainer>
                <StyledInnerGrouping>
                    <StyledLink target='_self' href="https://github.com/888Owl">Github</StyledLink>
                    {qrsize && <QRcode size={87} value={"https://github.com/888Owl"} />}
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <StyledLink target='_self' href="https://www.linkedin.com/in/samson-swift-/">LinkedIn</StyledLink>
                    {qrsize && <QRcode size={87} value={"https://www.linkedin.com/in/samson-swift-/"} />}
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <StyledLink target='_self' href="hhttps://codepen.io/888_owl">Codepen</StyledLink>
                    {qrsize && <QRcode size={87} value={"https://codepen.io/888_owl"} />}
                </StyledInnerGrouping>
            </StyledInnerContainer>
        </Container>
    )
}

const StyledHeader = styled.h3`
    text-align: center;
    margin-top: 1%;
`

const HorizontalSpacer = styled.div`
width: 25px;
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
font-weight: 900;
@media (min-width: 900px){
text-decoration: none;
color: yellow;
border-radius: 8px;
width: 83px;
&:hover {
    background-color: white;
    color: #006464;
}
}
@media (max-width: 900px){
    box-sizing: content-box;
    text-decoration: none;
    color: yellow;
    border-radius: 8px;
    width: 46px;
    }
`
const StyledInnerGrouping = styled.div`
width: 33%;
height: 140px;
display: flex;
flex-direction: column;
align-items: center;
`

export default Contact