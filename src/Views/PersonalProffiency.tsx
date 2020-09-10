import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
//images
import house from '../Images/house.png'
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
        <StyledContainer>
            <StyledSectionsHolder>
                <StyledSections to='/' exact><img width="30px" height="30px" src={house} alt='house to show that this is a button to home' /></StyledSections>
            </StyledSectionsHolder>
            <StyledHeader>Tools</StyledHeader>
            <StyledInnerContainer>
                <StyledInnerGrouping>
                <MiniHeader>Html5</MiniHeader>
                <StyledImg src={html}/>
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                <MiniHeader>CSS</MiniHeader>
                <StyledImg src={css}/>
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                <MiniHeader>JS</MiniHeader>
                <StyledImg src={javascript}/>
                </StyledInnerGrouping>
                </StyledInnerContainer>

                <VerticalSpacer />
                <StyledInnerContainer>
                <StyledInnerGrouping>
                <MiniHeader>TS</MiniHeader>
                <StyledImg src={typescript}/>
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                <MiniHeader>JQuery</MiniHeader>
                <StyledImg src={jquery}/>
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                <MiniHeader>React</MiniHeader>
                <StyledImg src={reactpng}/>
                </StyledInnerGrouping>
                </StyledInnerContainer>
                <VerticalSpacer />
                <StyledInnerContainer>
                <StyledInnerGrouping>
                <MiniHeader>Bootstrap</MiniHeader>
                <StyledImg src={bootstrap}/>
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                <MiniHeader>Angular</MiniHeader>
                <StyledImg src={angular}/>
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                <MiniHeader>Egret</MiniHeader>
                <StyledImg src={egret}/>
                </StyledInnerGrouping>
            </StyledInnerContainer>
            <VerticalSpacer />
                <StyledInnerContainer>
                <StyledInnerGrouping>
                <MiniHeader>Sourcetree</MiniHeader>
                <StyledImg src={sourcetree}/>
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                <MiniHeader>GitHub</MiniHeader>
                <StyledImg src={github}/>
                </StyledInnerGrouping>
                <HorizontalSpacer />
                <StyledInnerGrouping>
                <MiniHeader>VSCode</MiniHeader>
                <StyledImg src={vscode}/>
                </StyledInnerGrouping>
            </StyledInnerContainer>
        </StyledContainer>
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
const StyledHeader = styled.h3`
    text-align: center;
`

const VerticalSpacer = styled.div`
height: 5px;
`
const HorizontalSpacer = styled.div`
width: 45px;
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
const MiniHeader = styled.h4`
text-align: center
`
export default PersonalProffiency