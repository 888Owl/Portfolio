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
import vue from '../Images/vue.png'
//images^^^
const PersonalProffiency: React.FC = () => {

    return (
        <Container>
            <StyledHeader>Skills</StyledHeader>
            <StyledInnerContainer>
                <StyledInnerGrouping>
                    <MiniHeader>Html5</MiniHeader>
                    <StyledImg loading="lazy" src={html} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>CSS</MiniHeader>
                    <StyledImg loading="lazy" src={css} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>TS</MiniHeader>
                    <StyledImg loading="lazy" src={typescript} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>JS</MiniHeader>
                    <StyledImg loading="lazy" src={javascript} />
                </StyledInnerGrouping>
            </StyledInnerContainer>
            <VerticalSpacer />
            <StyledInnerContainer>
                <StyledInnerGrouping>
                    <MiniHeader>JQuery</MiniHeader>
                    <StyledImg loading="lazy" src={jquery} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>Bootstrap</MiniHeader>
                    <StyledImg loading="lazy" src={bootstrap} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>Angular</MiniHeader>
                    <StyledImg loading="lazy" src={angular} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>React</MiniHeader>
                    <StyledImg loading="lazy" src={reactpng} />
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
                    <StyledImg loading="lazy" src={github} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>VSCode</MiniHeader>
                    <StyledImg loading="lazy" src={vscode} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>Egret</MiniHeader>
                    <StyledImg loading="lazy" src={egret} />
                </StyledInnerGrouping>
            </StyledInnerContainer>
            <VerticalSpacer />
            <StyledInnerContainer>
                <StyledInnerGrouping>
                    <MiniHeader>Sourcetree</MiniHeader>
                    <StyledImg loading="lazy" src={sourcetree} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                    <MiniHeader>Vue</MiniHeader>
                    <StyledImg loading="lazy" src={vue} />
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping/>
                <HorizontalSpacer />
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
width: 96%;
height: 15%;
margin-left: 2%;
margin-left: 2%;

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