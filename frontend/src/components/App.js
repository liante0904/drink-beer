import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Rank, Login, Home, Beer, BeerEditorPage } from 'pages';
import  Header  from 'components/common/Header';

const App = () => {
    return (
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rank" component={Rank}/>
        <Switch>
          <Route path="/login/:name" component={Login}/>
          <Route path="/login" component={Login}/>
        </Switch>
        <Route exact path="/beer" component={Beer}/>
        <Route exact path="/BeerEditorPage" component={BeerEditorPage}/>
      </div>
    );
}

export default App;
