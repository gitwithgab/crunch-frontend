import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  } from 'react-router-dom';
  import StartPage from "../pages/StartPage";


const App = () => {
  return (
    <>

        <Router>

            <Switch>
            
                <Route exxact path="/">

                      <StartPage />

                </Route>
            
            </Switch>
        
        </Router> 
 
    </>
  )
}

export default App
