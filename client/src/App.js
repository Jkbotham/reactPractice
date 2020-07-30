import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "../src/components/footer/footer"
import MainPage from "../src/components/pages/mainPage"
import WeatherApp from "../src/components/pages/weatherApp/weather"
// import { notify } from '../../routes';

// 404 Page Function
function NotFound () {
  return (
    <div>
          <h1> 404 Not Found</h1>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/weatherApp" component={WeatherApp} />
      {/* <Route component={NotFound} /> */}
      </Switch>


      <Footer />
    </Router>
  );
}

export default App;


