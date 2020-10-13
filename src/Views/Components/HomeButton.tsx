import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import house from '../../Images/house.png'

const HomeButton: React.FC = () =>{
    return (
        <StyledSectionsHolder>
                <StyledSections to='/' exact><img width="30px" height="30px" src={house} alt='house to show that this is a button to home' /></StyledSections>
            </StyledSectionsHolder>
    )
}

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
export default HomeButton