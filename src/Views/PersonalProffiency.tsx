import React from 'react'
import styled from 'styled-components'
import Container from './Components/Container'
//images
import css from '../Images/css3.png'
import html from '../Images/html5.png'
import egret from '../Images/egret.png'
import jquery from '../Images/jquery.png'
import bootstrap from '../Images/bootstrap.png'
import reactpng from '../Images/react.png'
import angular from '../Images/angularjs.png'
import javascript from '../Images/javascript.png'
import typescript from '../Images/typescript.png'
import sourcetree from '../Images/sourcetree.png'
import github from '../Images/github.png'
import vscode from '../Images/vscode.png'
//images^^^
const PersonalProffiency: React.FC = () => {

    return (
        <Container>
            <StyledHeader>Tools</StyledHeader>
            <StyledInnerContainer>
                <StyledInnerGrouping>
                    <MiniHeader>Html5</MiniHeader>
                    <StyledImg src={html} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>CSS</MiniHeader>
                    <StyledImg src={css} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>TS</MiniHeader>
                    <StyledImg src={typescript} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>JS</MiniHeader>
                    <StyledImg src={javascript} />
                </StyledInnerGrouping>
            </StyledInnerContainer>
            <VerticalSpacer />
            <StyledInnerContainer>
                <StyledInnerGrouping>
                    <MiniHeader>JQuery</MiniHeader>
                    <StyledImg src={jquery} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>Bootstrap</MiniHeader>
                    <StyledImg src={bootstrap} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>Angular</MiniHeader>
                    <StyledImg src={angular} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>React</MiniHeader>
                    <StyledImg src={reactpng} />
                </StyledInnerGrouping>
            </StyledInnerContainer>
            <VerticalSpacer />
            <StyledInnerContainer>
            <StyledInnerGrouping>
                    <MiniHeader>Styled-Components</MiniHeader>
                    <StyledSpan>{`< 💅🏾>`}</StyledSpan>
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>GitHub</MiniHeader>
                    <StyledImg src={github} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>VSCode</MiniHeader>
                    <StyledImg src={vscode} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>Egret</MiniHeader>
                    <StyledImg src={egret} />
                </StyledInnerGrouping>
            </StyledInnerContainer>
            <VerticalSpacer />
            <StyledInnerContainer>
                <StyledInnerGrouping>
                    <MiniHeader>Sourcetree</MiniHeader>
                    <StyledImg src={sourcetree} />
                </StyledInnerGrouping>
                <StyledInnerGrouping/>
                <StyledInnerGrouping/>
                <StyledInnerGrouping/>
            </StyledInnerContainer>
        </Container>
    )
}

const StyledImg = styled.img`
@media (min-width: 900px) {
    width: 100px;
    height: 100px;
  }
@media (max-width: 900px) {
    width: 60px;
    height: 60px;
  }
`

const StyledSpan = styled.span`
@media (min-width: 900px) {
    font-size: 60px;
  }
@media (max-width: 900px) {
    font-size: 30px;
  }
`

const StyledHeader = styled.h3`
    text-align: center;
`

const VerticalSpacer = styled.div`
height: 5px;
`

const HorizontalSpacer = styled.div`
width: 45px;
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

const StyledInnerGrouping = styled.div`
width: 33%;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
`

const MiniHeader = styled.h4`
text-align: center
`
export default PersonalProffiency