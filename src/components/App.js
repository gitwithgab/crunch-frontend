import React from 'react';
import movieContext from "../context/MovieContext";
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  } from 'react-router-dom';
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage"
import MoviePage from "../pages/MoviePage";
import TVShowPage from "../pages/TVShowPage";
import FeaturedPage from "../pages/FeaturedPage";


const App = () => {
  return (
    <>

        <Router>

            <Switch>

                <movieContext.Provider>
            
                    <Route exact path="/">

                          <LandingPage />

                    </Route>

                    <Route exact path="/login">

                          <LoginPage />

                    </Route>

                    <Route exact path="/register">

                          <RegisterPage />

                    </Route>

                    <Route exact path="/home">

                           <HomePage />

                    </Route>

                    <Route exact path="/movies">

                          <MoviePage />

                    </Route>

                    <Route exact path="/tvshows">

                          <TVShowPage />

                    </Route>

                    <Route exact path="/featured">

                          <FeaturedPage />

                    </Route>

                </movieContext.Provider>
           
            </Switch>
        
        </Router> 
 
    </>
  )
}

export default App
