import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Rank, Login, Home } from 'pages';
import  Header  from 'components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rank" component={Rank}/>
        <Switch>
          <Route path="/login/:name" component={Login}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
