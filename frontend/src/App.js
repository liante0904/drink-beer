import React, { Component } from 'react';
import BeerService from './component/BeerService'
import BeerItem from './component/BeerItem';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      beers: ''
    }
    this.beerService = new BeerService();
  }
  componentDidMount(){
    /*
    this.callApi()
      .then( res => this.setState({ beers: res.data}) )
      .catch( err => console.log(err));
    */
    this.fetchBeerList();
  }

  fetchBeerList = (data) => {
    this.beerService.beers((response) => {
      this.setState({ beers: response.data });
    });
  }
  /*
  callApi = async () => {
    const response = await fetch('http://localhost:4000/api/beers');
    const body = await response.json();
    console.log(body.data);
    return body
  }
  */

  handleDelete = (event) => {
    const id = event.target.id;
    this.beerService.delete(id, (response) => {
      console.log( response.status )
      if(response.status === 200) this.fetchBeerList();

    });
    console.log(id);
  }
  render() {
    const { handleDelete }
    = this;
    return (
      <div className="App">
          {this.state.beers ? this.state.beers.map(
            (beerItem, i) => {
              return ( <BeerItem onDelete={handleDelete} beerItem={beerItem} key={i}/> )
            }
          ) : ""}
      </div>
    );
  }
}

export default App;
