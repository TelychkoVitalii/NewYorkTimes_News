import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TopicDetails from '../Main/TopicDetails';
import TopicStore from '../../store/TopicStore';
import Favorites from '../Main/Favorites';
// import ArticlesStore from '../../store/ArticlesStore';
import Main from '../Main/index';
import '../../styles/App.css';

class App extends Component {
  render() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
              <Header tpStore={new TopicStore()} />
                  <Switch>
                      <Redirect from="/" exact to="/topics" />
                      <Route exact path="/topics" component={Main}/>
                      <Route path="/topic/:id" render={({match}) => <TopicDetails tpStore={new TopicStore()} match={match} />} />
                      <Route path="/favorites" render={() => <Favorites tpStore={new TopicStore()} />}/>
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
