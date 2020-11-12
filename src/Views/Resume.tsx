import React from 'react'
import styled from 'styled-components'

import VertSpacer from './Components/VertSpacer'

const Resume: React.FC = () => {
    return (
        <>
        {window.innerWidth > 900 ? 
        <Body>
        <br/>
        <br/>
        <VertSpacer />
        <VertSpacer />
        <VertSpacer />
        <Horizontal>
            <Title>Samson<br /> Swift <br /> 孫迅</Title>
            <TitleCon>台北市信義路五段150巷426弄11號 <br />+866-975-139-873 <br />87daysofsam@gmail.com</TitleCon>
        </Horizontal>
        <VertSpacer />
        <Horizontal>
            <Left>&#x02500;</Left>
        </Horizontal>
        <VertSpacer />
        <Horizontal>
            <Titleleft>Education</Titleleft>
            <TitleCon>Diablo Valley College <br /><Info>May 2016 - July 2016,  California</Info></TitleCon>
        </Horizontal>
        <VertSpacer />
        <Horizontal>
            <Left>&#x02500;</Left>
        </Horizontal>
        <VertSpacer />
        <Horizontal>
            <Titleleft>Projects</Titleleft>
            <LargerInfo>
                &#x02ABC;<StyledLink href='https://www.terminowl.com/'>Terminowl.com</StyledLink>- The current home of my favorite projects I have completed, and more information about me.<br /><br />
            &#x02ABC;<StyledLink href='https://jo-jo.club/'>Jo-jo.club</StyledLink>- This is a website I built with React for a customer in Taiwan, according to their specifications.<br /><br />
            &#x02ABC;<StyledLink href='https://github.com/888Owl/projectsForGithub'>Github repository</StyledLink>- A collection of projects and interactive algorithms I have coded.<br /><br />
            &#x02ABC;<StyledLink href='https://stake.zombie.finance/'>Zombie.Finance</StyledLink>- This is a Dapp built with React, Typescript and Ethereum.  Stake.Zombie.Finance  is a social experiment with the logic of (FOMO) it has an ever shifting price from day to day due to its Rebase and Debase of supply.  This token has been consolidated into Dice.finance.<br /><br />
            &#x02ABC;<StyledLink href='https://shrimp.finance/'>Shrimp.Finance</StyledLink>- This is a Dapp built with React, Typescript and Ethereum. Shrimp.Finance  is a user portal for supplying liquidity and being rewarded with our Erc-20. This token has been consolidated into Dice.finance.
            </LargerInfo>
        </Horizontal>
        <VertSpacer />
        <Horizontal>
            <Left>&#x02500;</Left>
        </Horizontal>
        <VertSpacer />
        <Horizontal>
            <Titleleft>Hackathons</Titleleft>
            <LargerInfo>Facebook Developer Community Hackathon - San Francisco<br /> November 2019</LargerInfo>
        </Horizontal>
        <VertSpacer />
        <Horizontal>
            <Left>&#x02500;</Left>
        </Horizontal>
        <VertSpacer />
        <Horizontal>
            <Titleleft>Courses&#x00009;&#x00009;</Titleleft>
            <LargerInfo>freeCodeCamp - fullstack developer curriculum<br />
            Kyle Simpsons - You Don't Know JS Series<br />
            Colt Steele - The Advanced Web Developer Bootcamp</LargerInfo>
        </Horizontal>
        <VertSpacer />
        <Horizontal>
            <Left>&#x02500;</Left>
        </Horizontal>
        <VertSpacer />
        <Horizontal>
            <Titleleft>Skills</Titleleft>
            <LargerInfo>HTML |  CSS | JavaScript | BootStrap | TypeScript | jQuery | React | Angular | Egret | Ethereum |  CSS Grids | CSS Flexbox | Styled-components | SourceTree</LargerInfo>
        </Horizontal>
        <VertSpacer />
        <Horizontal>
            <Left>&#x02500;</Left>
        </Horizontal>
        <VertSpacer />
        <Horizontal>
            <Titleleft>Experience</Titleleft>
            <LargerInfo>
                <InfoTitle >Progressing Today / Frontend Developer</InfoTitle><br />
Feb 2020 - PRESENT Taipei Taiwan Xinyi District<br />
I work currently as the Frontend developer. During my time here I have built 3 games with Egret, 1 community site with React, and 3 Dapps with Angular, React, Typescript and Ethereum.<br /><br />

                <InfoTitle >McCabe Fine Builders/ Project Leader</InfoTitle><br />
May 2018 - Feb 2020,  San Francisco Bay Area<br />
I worked as a site supervisor and was integral to scheduling, and finishing projects.<br /><br />
                <InfoTitle >Swift Construction / Project Leader</InfoTitle><br />
December 2013 - April 2018,  San Francisco Bay Area<br />
Most of my work required identifying problems and troubleshooting them for the most efficient repair, as well as communicating as a part of a team.
            </LargerInfo>
        </Horizontal>
        <br/>
        <br/>
        <br/>
        <br/>
    </Body>
        :
<Body>
            <br/>
            <br/>
            <VertSpacer />
            <VertSpacer />
            <VertSpacer />
                <Title>Samson Swift 孫迅</Title>
                <br /> 
                <TitleCon>台北市信義路五段150巷426弄11號 <br /> <br />+866-975-139-873 <br /> <br />87daysofsam@gmail.com</TitleCon>
            <br />
            <hr/>
            <br />
                <Titleleft>Education</Titleleft>
                <TitleCon>Diablo Valley College <br /><Info>May 2016 - July 2016,  California</Info></TitleCon>
            <VertSpacer />
            <VertSpacer />
                <Titleleft>Projects</Titleleft>
                <LargerInfo>
                    &#x02ABC;<StyledLink href='https://www.terminowl.com/'>Terminowl.com</StyledLink>- The current home of my favorite projects I have completed, and more information about me.<br /><br />
                &#x02ABC;<StyledLink href='https://jo-jo.club/'>Jo-jo.club</StyledLink>- This is a website I built with React for a customer in Taiwan, according to their specifications.<br /><br />
                &#x02ABC;<StyledLink href='https://github.com/888Owl/projectsForGithub'>Github repository</StyledLink>- A collection of projects and interactive algorithms I have coded.<br /><br />
                &#x02ABC;<StyledLink href='https://stake.zombie.finance/'>Zombie.Finance</StyledLink>- This is a Dapp built with React, Typescript and Ethereum.  Stake.Zombie.Finance  is a social experiment with the logic of (FOMO) it has an ever shifting price from day to day due to its Rebase and Debase of supply.  This token has been consolidated into Dice.finance.<br /><br />
                &#x02ABC;<StyledLink href='https://shrimp.finance/'>Shrimp.Finance</StyledLink>- This is a Dapp built with React, Typescript and Ethereum. Shrimp.Finance  is a user portal for supplying liquidity and being rewarded with our Erc-20. This token has been consolidated into Dice.finance.
                </LargerInfo>
            <VertSpacer />
            <VertSpacer />
                <Titleleft>Hackathons</Titleleft>
                <LargerInfo>Facebook Developer Community Hackathon - San Francisco<br /> November 2019</LargerInfo>
            <VertSpacer />
            <VertSpacer />
                <Titleleft>Courses&#x00009;&#x00009;</Titleleft>
                <LargerInfo>freeCodeCamp - fullstack developer curriculum<br />
                Kyle Simpsons - You Don't Know JS Series<br />
                Colt Steele - The Advanced Web Developer Bootcamp</LargerInfo>
            <VertSpacer />
            <VertSpacer />
                <Titleleft>Skills</Titleleft>
                <LargerInfo>HTML |  CSS | JavaScript | BootStrap | TypeScript | jQuery | React | Angular | Egret | Ethereum |  CSS Grids | CSS Flexbox | Styled-components | SourceTree</LargerInfo>
            <VertSpacer />
            <VertSpacer />
                <Titleleft>Experience</Titleleft>
                <LargerInfo>
                    <InfoTitle >Progressing Today / Frontend Developer</InfoTitle><br />
Feb 2020 - PRESENT Taipei Taiwan Xinyi District<br />
I work currently as the Frontend developer. During my time here I have built 3 games with Egret, 1 community site with React, and 3 Dapps with Angular, React, Typescript and Ethereum.<br /><br />

                    <InfoTitle >McCabe Fine Builders/ Project Leader</InfoTitle><br />
May 2018 - Feb 2020,  San Francisco Bay Area<br />
I worked as a site supervisor and was integral to scheduling, and finishing projects.<br /><br />
                    <InfoTitle >Swift Construction / Project Leader</InfoTitle><br />
December 2013 - April 2018,  San Francisco Bay Area<br />
Most of my work required identifying problems and troubleshooting them for the most efficient repair, as well as communicating as a part of a team.
                </LargerInfo>
            <br/>
            <br/>
            <br/>
            <br/>
        </Body>
        }
        </>
        
    )
}

const Body = styled.div`
margin-botton: 5%;
line-height: 1.1;
background-color: white;
color: black;
display: flex;
flex-direction: column;
@media (min-width: 900px){
margin-left: 20%;
margin-right: 20%;
width: 60%;
height: 100%;
margin-top: 5%;
}
@media (max-width: 900px){
margin-left: 2%;
margin-right: 2%;
width: 100%;
height: 100%;
max-height: 99%;
overflow-y: scroll;
margin-top: 1%;

}
`

const Horizontal = styled.div`
display: flex; 
flex-direction: row;
`

const Title = styled.h2`
text-align: center;
`

const TitleCon = styled.h3`
text-align: center;
@media (min-width: 900px){
    margin-left: 15%;
}
@media (max-width: 900px){
margin-left: 0;
}
`

const Titleleft = styled.h3`
@media (min-width: 900px){
text-align: left;
}
@media (max-width: 900px){
    text-align:center;
    margin-top: 15px;
    margin-bottom: 15px;
}
`

const Info = styled.span`
text-align: left;
font-size: 0.8em;
@media (min-width: 900px){
    margin-left: 15%;
}
@media (max-width: 900px){
    margin-left: 0;
}
`

const LargerInfo = styled.span`
text-align: left;
font-size: 0.9em;
@media (min-width: 900px){
    margin-left: 15%;
}
@media (max-width: 900px){
    margin-left: 5%;
}
`

const InfoTitle = styled.span`
text-align: left;
font-size: 1em;
font-weight: 800;
`

const Left = styled.h1`
text-align: left;
float: left;
`

const StyledLink = styled.a`
font-weight: 900;
@media (min-width: 900px){
color: #5e5fca;
border-radius: 8px;
width: 83px;
&:hover {
    background-color: white;
    color: #006464;
}
}
@media (max-width: 900px){
    box-sizing: content-box;
    color: #5e5fca;
    border-radius: 8px;
    width: 46px;
    }
`

export default Resume