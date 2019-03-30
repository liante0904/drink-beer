import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';

import AddBeer from './component/AddBeer';
import UpdateBeer from './component/UpdateBeer';
import BeerList from './component/BeerList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Link to="/beer/add">AddBeer</Link>
          <Link exact="true" to="/">BeerList</Link>
          <Route exact path="/" component={BeerList}/>
          <Route path="/beer/add" component={AddBeer}/>
          <Route path="/beer/update/:id" component={UpdateBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
