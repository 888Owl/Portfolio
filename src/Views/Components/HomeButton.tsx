import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HomeButton: React.FC = () => {
    const [likesDark, setLikesDark] = useState("black");

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            setLikesDark("white")
        }
    }, [])

    return (
        <StyledSectionsHolder>
            <StyledSections to='/' exact><h1 style={{ color: `${likesDark}` }}>Home</h1></StyledSections>
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