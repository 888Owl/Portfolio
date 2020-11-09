import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HomeButton: React.FC = () => {


    return (

        <StyledSectionsHolder>
            <StyledSections to='/' exact><h1 style={{ color: `white` }}>Home</h1></StyledSections>
        </StyledSectionsHolder>
        
    )
}

const StyledSections = styled(NavLink)`
    height: 10%;
    width: 10%;
    padding:2%;
    text-decoration: none;
`

const StyledSectionsHolder = styled.nav`
    position: absolute;
    color:unset;
    text-decoration: none;
    top: 3%;
    height: 10%;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: pulse;
    animation-duration: 1s;
    animation-iteration-count: 10;
@media (min-width: 900px){
    right: 3%;
    }
    @media (max-width: 900px){
    right: 2%;
    }
`
export default HomeButton