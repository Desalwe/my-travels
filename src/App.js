import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          photo="https://www.smartertravel.com/uploads/2018/03/shutterstock_519559273-1400x500.jpg"
          destination="Honolulu"
          country="U.S.A."
          distance="12,588 km"
        />
        <Travel
          photo="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Africa/South%20Africa/Cape%20Town/cape-town-guides-lead.jpg?imwidth=450"
          destination="Cape Town"
          country="South Africa"
          distance="8,562 km"
        />
      </div>
    );
  }
}

export default App;