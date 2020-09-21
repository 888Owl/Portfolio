import React, { useEffect, useState } from 'react'
//component imports
import Introduction from './Views/Introduction'
import HomePageRouter from './Views/HomePageRouter'
import Contact from './Views/Contact'
import DeFi from './Views/DeFi'
import PersonalProffiency from './Views/PersonalProffiency'
import Projects from './Views/Projects'
import Me from './Views/Me'
import Work from './Views/Work'
import Lightbox from './Views/LightboxPhotos'
import Hackathons from './Views/Hackathons'
// import Choices from './Views/Choices'
//utility imports
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

const Home: React.FC = () => {

  const [likesDark, setLikesDark] = useState(false);

  useEffect(() => {
    //this is to see if a user prefers light mode or dark mode and sets the background color accordingly
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      setLikesDark(true)
    }
  }, [setLikesDark])

  return (<>
      {likesDark ?
        <div className="body_dark">
          <StyledDiv>
          <Router>
          <Switch>
            <Route path="/" exact>
              <Introduction />
              <StyledSpacer />
              <HomePageRouter />
            </Route>
            <Route path="/socials" exact>
              <Contact />
            </Route>
            <Route path="/dapps" exact>
              <DeFi />
            </Route>
            <Route path="/knowledge" exact>
              <PersonalProffiency/>
            </Route>
            <Route path="/projects" exact>
              <Projects/>
            </Route>
            <Route path="/sam" exact>
              <Me/>
            </Route>
            <Route path="/work" exact>
              <Work/>
            </Route>
            <Route path="/collages" exact>
              <Lightbox/>
            </Route>
            <Route path="/hackathons" exact>
              <Hackathons/>
            </Route>
            {/* <Route path="/choices" exact>
              <Choices/>
            </Route> */}
          </Switch>
        </Router>
          </StyledDiv>
        </div>
        :
        <div className="body_light">
          <StyledDiv>
          <Router>
          <Switch>
            <Route path="/" exact>
              <Introduction />
              <StyledSpacer />
              <HomePageRouter />
            </Route>
            <Route path="/socials" exact>
              <Contact />
            </Route>
            <Route path="/dapps" exact>
              <DeFi />
            </Route>
            <Route path="/knowledge" exact>
              <PersonalProffiency/>
            </Route>
            <Route path="/projects" exact>
              <Projects/>
            </Route>
            <Route path="/sam" exact>
              <Me/>
            </Route>
            <Route path="/work" exact>
              <Work/>
            </Route>
            <Route path="/collages" exact>
              <Lightbox/>
            </Route>
            <Route path="/hackathons" exact>
              <Hackathons/>
            </Route>
            {/* <Route path="/choices" exact>
              <Choices/>
            </Route> */}
          </Switch>
        </Router>
          </StyledDiv>
          </div>
      }
    </>)
}

const StyledDiv = styled.main`
display: flex;
flex-flow: column;
margin-left: auto;
margin-right: auto;
border-radius: 4px;
justify-content: center;
width: 80%;
height: 90%;
max-height: 90%;
overflow-y: scroll;
background-color: #006464;
`
const StyledSpacer = styled.div`
height: 15px;
width: 100%;
`

export default Home