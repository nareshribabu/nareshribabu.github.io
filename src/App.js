import React from 'react';
import Navbar from './components/Navbar';
import SideBar from './components/Sidebar';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';


function App() {

  const location = useLocation();
  return (

    <div className="App">

      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
            <SideBar />
          </div>
          <div className="col-lg-9 app__main-content">
            {/* Navbar */}
            <Navbar />

            <Switch Location={location} key={location.key}>

              <Route exact path="/">
                <Projects />
              </Route>

              <Route path="/About">
                <About />
              </Route>

              <Route path="/Experience">
                <Experience />
              </Route>

              <Route>
                <Redirect to="/" />
              </Route>

            </Switch>

          </div>
        </div>
      </div>
    </div >


  );
}

export default App;
