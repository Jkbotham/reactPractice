import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../src/components/footer/footer";
import MainPage from "../src/components/pages/mainPage";
import WeatherApp from "../src/components/pages/weatherApp/weather";
// import TipCalculatorApp from "../src/components/pages/tipCalculatorApp/calc";
// import { notify } from '../../routes';

function App() {
  return (
    <Router>
      <Switch>

        {/* <Route exact path="/tipCalculator" component={TipCalculatorApp} /> */}
        <Route exact path="/weatherApp" component={WeatherApp} />
        <Route exact path="/" component={MainPage} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
