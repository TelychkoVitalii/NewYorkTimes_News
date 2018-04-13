import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Walkman from '../Walkman/index';
import '../../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Walkman/>
          <Footer/>
      </div>
    );
  }
}

export default App;
