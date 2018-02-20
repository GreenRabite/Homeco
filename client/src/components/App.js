import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>
const Home = () => <h2>Home</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
      <BrowserRouter>
      <div>
      <Header />
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      </div>
      </BrowserRouter>
      </div>
    );
  }
};

export default App;
