import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HomePageRouter: React.FC = () => {
    return (
        <StyledSectionsHolder>
            <StyledSections1 to='/sam' exact activeClassName="firstSection" >About Me</StyledSections1>
            <StyledSections2 to='/projects' exact activeClassName="secondSection" >Projects</StyledSections2>
            <StyledSections3 to='/work' exact activeClassName="thirdSection" >Employment</StyledSections3>
            <StyledSections4 to='/knowledge' exact activeClassName="fourthSection" >Tools</StyledSections4>
            <StyledSections5 to='/dapps' exact activeClassName="fifthSection" >Dapps</StyledSections5>
            <StyledSections6 to='/socials' exact activeClassName="sixthSection" >Contact</StyledSections6>
            <StyledSections7 to='/collages' exact activeClassName="sixthSection" >Collages</StyledSections7>
            <StyledSections8 to='/hackathons' exact activeClassName="sixthSection" >Hackathons</StyledSections8>
        </StyledSectionsHolder>
    )
}


const StyledSections1 = styled(NavLink)`
    height: 8%;
    width: 100%;
    padding:2%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 26px;
    color: unset;
    
    @media (min-width: 900px){
        &:hover {
        background-color: palevioletred;
        color: white;
      }
    }
`
const StyledSections2 = styled(NavLink)`
    height: 8%;
    width: 100%;
    padding:2%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 26px;
    color: unset;
    @media (min-width: 900px){
        &:hover {
        background-color: palevioletred;
        color: white;
      }
    }
`
const StyledSections3 = styled(NavLink)`
    height: 8%;
    width: 100%;
    padding:2%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 26px;
    color: unset;
    @media (min-width: 900px){
        &:hover {
        background-color: palevioletred;
        color: white;
      }
    }
`
const StyledSections4 = styled(NavLink)`
    height: 8%;
    width: 100%;
    padding:2%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 26px;
    color: unset;
    @media (min-width: 900px){
        &:hover {
        background-color: palevioletred;
        color: white;
      }
    }
`
const StyledSections5 = styled(NavLink)`
    height: 8%;
    width: 100%;
    padding:2%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 26px;
    color: unset;
    @media (min-width: 900px){
        &:hover {
        background-color: palevioletred;
        color: white;
      }
    }
`

const StyledSections6 = styled(NavLink)`
    height: 8%;
    width: 100%;
    padding:2%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 26px;
    color: unset;
    @media (min-width: 900px){
        &:hover {
        background-color: palevioletred;
        color: white;
      }
    }
`
const StyledSections7 = styled(NavLink)`
    height: 8%;
    width: 100%;
    padding:2%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 26px;
    color: unset;
    @media (min-width: 900px){
        &:hover {
        background-color: palevioletred;
        color: white;
      }
    }
`
const StyledSections8 = styled(NavLink)`
    height: 8%;
    width: 100%;
    padding:2%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 26px;
    color: unset;
    @media (min-width: 900px){
        &:hover {
        background-color: palevioletred;
        color: white;
      }
    }
`

const StyledSectionsHolder = styled.nav`
    color:unset;
    text-decoration: none;
    height: 50%;
    width: 96.2%;
    display: flex;
    flex-direction: column;
`

export default HomePageRouter