import React from 'react'
import styled from 'styled-components'
import HomeButton from './Components/HomeButton'
import sffbhackathon from '../Images/sffbhackathon.png'
import WheresWaldo from '../Images/WheresWaldo.png'

const Hackathons: React.FC = () => {

    return (
        <StyledContainer>
            <HomeButton />
            {window.innerWidth > 900 &&
                <>
                    <StyledHeader>Hackathons</StyledHeader>
                    <StyledHeader2>Facebook Developer Community Hackathon - San Francisco</StyledHeader2>
                    <StyledRow>
                        <StyledColumn>
                            <StyledImage src={sffbhackathon} alt="My team during the Hackathon" />
                            <StyledImage src={WheresWaldo} alt="Post Hackathon photgraph of most people who attended" />
                        </StyledColumn>
                        <Pillar />
                        <StyledColumn2>
                            I attended this hackathon from November 16th - November 17th 2019.
                            My team Worked on building a Messenger bot which was intended to work as a language exchange and penpal matcher.
                            The bot was connected to a Node and Mongo backend that would take a users input and run a sorting algorithm to see if
                            there was a match for them, then it would send each party a notification with a chat link for them to connect.
                            On completion we intended to add a feature which would send out notifications to encourage paired users to communicate more and offer topics for them to speak about.
            </StyledColumn2>
                    </StyledRow>
                </>
            }
            {window.innerWidth < 900 &&
                <>
                    <StyledHeaderM>Hackathons</StyledHeaderM>
                    <StyledHeader2>Facebook Developer Community Hackathon - San Francisco</StyledHeader2>
                    <StyledColumn3>
                        <StyledImage src={sffbhackathon} alt="My team during the Hackathon" />
                        <StyledImage src={WheresWaldo} alt="Post Hackathon photgraph of most people who attended" />
            I attended this hackathon from November 16th - November 17th 2019.
             My team Worked on building a Messenger bot which was intended to work as a language exchange and penpal matcher.
             The bot was connected to a Node and Mongo backend that would take a users input and run a sorting algorithm to see if
              there was a match for them, then it would send each party a notification with a chat link for them to connect.
            On completion we intended to write add a feature to send out notifications to encourage them to communicate and to offer topics to speak about.
            </StyledColumn3>
                </>
            }
        </StyledContainer>
    )
}
const Pillar = styled.div`
width: 10%;
heioght: 100%;
`
const StyledHeader = styled.h3`
text-align: center;
margin-bottom: 1%;
`
const StyledHeader2 = styled.h4`
text-align: center;
margin-bottom: 1%;
`
const StyledHeaderM = styled.h3`
text-align: center;
margin-bottom: 1%;
`
const StyledRow = styled.div`
display: flex;
flex-direction: row;
`
const StyledColumn = styled.div`
display: flex;
flex-direction: column;
width: 45%;
`
const StyledColumn2 = styled.div`
display: flex;
flex-direction: column;
width: 45%;
line-height: 1.3;
margin-top: auto;
margin-bottom: auto;
`
const StyledColumn3 = styled.div`
display: flex;
flex-direction: column;
width: 100%;
line-height: 1.3;
`
const StyledImage = styled.img`
width: 90%;
margin-bottom: 3%;
`
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

export default Hackathons;