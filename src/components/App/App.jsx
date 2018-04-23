import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TopicDetails from '../Main/TopicDetails';
import Favorites from '../Main/Favorites';
import ArticlesStore from '../../store/ArticlesStore';
import Main from '../Main/index';
import '../../styles/App.css';

class App extends Component {
  render() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
              <Header articleStore={new ArticlesStore()} />
                  <Switch>
                      <Redirect from="/" exact to="/topics" />
                      <Route exact path="/topics" component={Main} />
                      <Route path="/topic/:id" component={TopicDetails} />
                      <Route path="/favorites" component={Favorites} />
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
