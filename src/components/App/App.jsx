import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TopicDetails from '../Main/TopicDetails';
import Main from '../Main/index';
import '../../styles/App.css';

class App extends Component {
  render() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
              <Header/>
                  <Switch>
                      <Route path="/topics" component={Main}/>
                      <Route path="/topic/:id" component={TopicDetails} />
                      <Route render={() => <h1 className="errorMsg">404: Page cannot be found</h1>}/>
                  </Switch>
              <Footer/>
              <DevTools />
          </div>
        </Router>
    );
  }
}

export default App;
