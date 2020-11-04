import React from 'react'
import styled from 'styled-components'
import Container from './Components/Container'
import First_company from '../Images/First_company.png'

const Work: React.FC = () => {

    return (
        <Container>
            <StyledHeader>Work</StyledHeader>
            <StyledInnerContainer>
                <StyledInnerGrouping>
                <StyledImg src={First_company} alt="Iguana as an html element, the logo of Progressing Today." />
                <span>Company Name: 微進科技有限公司</span>
                <span>Position: Frontend Engineer</span>
                <span>Duration: 2020/02/05-present</span>
                <br/>
                <StyledInfo>During my time at 微進科技有限公司(Progressing.Today), I used the <StyledExternalLink href="https://www.egret.com/">Egret Game Engine</StyledExternalLink>, Egret uses Typescript and EXML(a subset of XML which is  unique to Egret) to build the visuals and interactivity of the games.<br/> I maintained one game and built two more which used cryptographic hashes to verify the accuracy of each action taken by the user. These games were built based off of a designers specifications.<br/>
                I also added in Egrets Texture Merger system which allows the image heavy side of the games to be condensed and called upon when needed, I also wrote an <StyledExternalLink href="https://hackmd.io/dzNoTP1YT72iUxgRPVU-vw?view">HackMD</StyledExternalLink> article on how to use the Texture merger properly.
                These games were a project which another company was outsourcing to my company and upon completion of the contract we began building a site geared towards building a comunity with <StyledExternalLink href="https://reactjs.org/">React.Js</StyledExternalLink> which focused on using functional components and redux for state management.<br/>
                This project never quite took off and so the company began to branch off towards fully fledged Dapps, our first project in this space was built with <StyledExternalLink href="https://angular.io/">Angular,</StyledExternalLink> <StyledExternalLink href="https://jquery.com/">Jquery,</StyledExternalLink> and <StyledExternalLink href="https://ethereum.org/en/">Ethereum.</StyledExternalLink><br/>
                In order to get this project more traction the company then built two more tokens and websites each using React, Typescript and Ethereum. Currently these projects are staying afloat amidst the broad market of alt-coins and derivatives. I also have experience with uploading files to AWS S3 and the proccess of clearing caches with CloudFront Distributions.
                </StyledInfo>
                
                </StyledInnerGrouping>
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
height: 45%;
`

const StyledImg = styled.img`
@media (min-width: 900px) {
    width: 100px;
    height: auto;
    margin-bottom: 15px;
  }
@media (max-width: 900px) {
    width: 60px;
    height: auto;
  }
`

const StyledHeader = styled.h3`
    text-align: center;
`

const StyledExternalLink = styled.a`
text-decoration: none;
color: yellow;
&:hover {
    background-color: white;
    color: #006464;
}
`

const StyledInfo = styled.span`
    line-height: 1.6;
`

const StyledInnerGrouping = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default Work;