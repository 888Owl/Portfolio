import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import RouterLink from './Components/RouterLink'

const HomePageRouter: React.FC = () => {
    const [open1, setOpen1] = useState('none')
    const [home, setHome] = useState(false)

    const openFirst = () => {
        if(open1 === 'none'){
            setOpen1('block')
        } else {
            setOpen1('none')
        }
    }

    useEffect(() => {
        let x = window.location.href.split('/')
        if (x[x.length-1].length > 1) {
            setHome(true)
        } else {
            setHome(false)
        }
    }, [])
    return (
        <StyledSectionsHolder>
            {/* me */}
            
            {home ? <RouterLink to='/' text="Home" /> : ''}
            <RouterLink to='/sam' text="About Me" />
            {/* works */}
            <Showwer onClick={openFirst}>Experience{open1 === 'none' ? <p>  &#x02A5B;</p>: <p>  &#x02A5A;</p>}</Showwer>
            <Shown style={{display: open1}}>
            <RouterLink to='/projects' text="Projects" />
            <RouterLink to='/work' text="Employment" />
            <RouterLink to='/dapps' text="Dapps" />
            <RouterLink to='/Skills' text="Skills" />
            <RouterLink to='/hackathons' text="Hackathons" />
            </Shown>
            <RouterLink to='/resume' text="Resume" />
            <RouterLink to='/socials' text="Contact" />
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
    margin-top: auto;
    margin-bottom: auto;
`

const Showwer = styled.span`
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
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
        background-color: rgb(256, 256, 256);
        color: black;
      }
    }
`

const Shown = styled.div`
width: 100%;
background: transparent;
display: flex;
flex-direction: column;
`



export default HomePageRouter