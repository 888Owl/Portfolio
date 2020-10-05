import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import house from '../Images/house.png'

const DeFi: React.FC = () => {
    
    
    useEffect(() => {
        
      })

    return (
        <StyledContainer>
        <StyledSectionsHolder>
        <StyledSections to='/' exact><img width="30px" height="30px" src={house} alt='house to show that this is a button to home'/></StyledSections>
        </StyledSectionsHolder>
        <StyledHeader>Dapps</StyledHeader>
        <StyledHeader2>In order to view most of the data on these sites you will need <br/>
            to have an Ethereum compatible wallet such as <StyledExternalLink href="https://metamask.io/">MetaMask</StyledExternalLink>
            </StyledHeader2>
        <StyledInnerContainer>
        <StyledInnerGrouping>
        <StyledExternalLink href="https://stake.zombie.finance/">Zombie.Finance</StyledExternalLink>
        <StyledExternalLink href="https://github.com/Zombie-Finance/zombie-protocol">Github</StyledExternalLink>
        </StyledInnerGrouping>
        <HorizontalSpacer />
        <StyledInnerGrouping>
        <StyledExternalLink href="https://shrimp.finance/">Shrimp.Finance</StyledExternalLink>
        <StyledExternalLink href="https://github.com/shrimp-finance/shrimp-protocol">Github</StyledExternalLink>
        </StyledInnerGrouping>
        <StyledInnerGrouping>
        <StyledExternalLink href="https://dice.finance/">Dice.Finance</StyledExternalLink>
        <StyledExternalLink href=''>Code is not open source.</StyledExternalLink>
        </StyledInnerGrouping>
        </StyledInnerContainer>
        </StyledContainer>
    )
}
const StyledContainer = styled.div`
display: flex;
flex-flow: column;
margin-left: auto;
margin-right: auto;
border-radius: 4px;
justify-content: center;
width: 80%;
max-height: 90%;
overflow-y: scroll;
height: 90%;
background-color: #006464;
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
width: 40%;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
`

const StyledHeader = styled.h3`
    text-align: center;
    margin-bottom: 40px;
`
const StyledHeader2 = styled.h4`
    text-align: center;
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
    height: 5%;
    width: 5%;
    display: flex;
        left: 2%;
    }
`

const StyledExternalLink = styled.a`
text-decoration: none;
color: yellow;
padding: 1px;
&:hover {
    background-color: white;
    color: #006464;
}
`
const HorizontalSpacer = styled.div`
width: 15px;
`


export default DeFi