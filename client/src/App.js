import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../src/components/footer/footer";
import MainPage from "../src/components/pages/mainPage";
import WeatherApp from "../src/components/pages/weatherApp/weather";
// import { notify } from '../../routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/weatherApp" component={WeatherApp} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
