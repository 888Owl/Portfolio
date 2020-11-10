import React from 'react'
//component imports
import HomePage from './Views/HomePage'
import HomePageRouter from './Views/HomePageRouter'
import Contact from './Views/Contact'
import DeFi from './Views/DeFi'
import PersonalProffiency from './Views/PersonalProffiency'
import Me from './Views/Me'
import Work from './Views/Work'
// import Lightbox from './Views/LightboxPhotos'
import Hackathons from './Views/Hackathons'
import Projects from './Views/Projects/Projects'
import Resume from './Views/Resume'
//utility imports
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

const Home: React.FC = () => {


  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage>
              <HomePageRouter />
            </HomePage>
          </Route>
          <Route path="/socials" exact>
            <Contact />
          </Route>
          <Route path="/dapps" exact>
            <DeFi />
          </Route>
          <Route path="/Skills" exact>
            <PersonalProffiency />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/sam" exact>
            <Me />
          </Route>
          <Route path="/work" exact>
            <Work />
          </Route>
          {/* <Route path="/collages" exact>
            <Lightbox />
          </Route> */}
          <Route path="/hackathons" exact>
            <Hackathons />
          </Route>
          <Route path="/Resume" exact>
            <Resume />
          </Route>
        </Switch>
      </Router>
  )
}

export default Home