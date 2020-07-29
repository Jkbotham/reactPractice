import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from "../src/components/footer/footer"
import MainPage from "../src/components/pages/mainPage"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={MainPage} />
        {/* <Route exact path="/history" component={History} />
        <Route exact path="/users" component={ViewAll} />
  <Route exact path="/signup" component={Signup} /> */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;