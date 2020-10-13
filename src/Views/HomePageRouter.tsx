import React from 'react'
import styled from 'styled-components'

import RouterLink from './Components/RouterLink'

const HomePageRouter: React.FC = () => {
    return (
        <StyledSectionsHolder>
            <RouterLink to='/sam' text="About Me" />
            <RouterLink to='/projects' text="Projects" />
            <RouterLink to='/work' text="Employment" />
            <RouterLink to='/knowledge' text="Tools" />
            <RouterLink to='/dapps' text="Dapps" />
            <RouterLink to='/socials' text="Contact" />
            <RouterLink to='/collages' text="Collages" />
            <RouterLink to='/hackathons' text="Hackathons" />
        </StyledSectionsHolder>
    )
}

const StyledSectionsHolder = styled.nav`
    color:unset;
    text-decoration: none;
    height: 73%;
    width: 96.2%;
    display: flex;
    flex-direction: column;
`

export default HomePageRouter