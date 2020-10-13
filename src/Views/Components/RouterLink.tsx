import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface RouterProps {
    to: string,
    text: string,
    }

const RouterLink: React.FC<RouterProps> = (props) =>{

    return (
        <StyledSections to={props.to} exact>{props.text}</StyledSections>
    )
}

const StyledSections = styled(NavLink)`
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
        animation: open;
        animation-duration: 1s;
        background-color: palevioletred;
        color: white;
      }
    }
`



export default RouterLink