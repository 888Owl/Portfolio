import React, { useEffect, useState } from 'react'
//component imports
import Introduction from './Views/Introduction'
import HomePageRouter from './Views/HomePageRouter'
import Contact from './Views/Contact'
import DeFi from './Views/DeFi'
import PersonalProffiency from './Views/PersonalProffiency'
import Projects from './Views/Projects'
import Me from './Views/Me'
//other imports
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'


const Home: React.FC = () => {

  const [likesDark, setLikesDark] = useState(false);

  useEffect(() => {
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
            <Route path="/contact" exact>
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
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/dapps" exact>
              <DeFi />
            </Route>
          </Switch>
        </Router>
          </StyledDiv>
        </div>
      }
    </>)


}

const StyledDiv = styled.div`
display: flex;
flex-flow: column;
margin-left: auto;
margin-right: auto;
border-radius: 4px;
justify-content: center;
width: 80%;
height: 90%;
background-color: #008B8B;
`
const StyledSpacer = styled.div`
height: 15px;
width: 100%;
`

export default Home