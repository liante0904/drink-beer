import React, { Component } from 'react';
import BeerService from '../component/BeerService';
import BeerItem from '../component/BeerItem';

class BeerList extends Component {
    constructor(props){
        super(props);
        this.state = {
            beers: ''
        }
        this.beerService = new BeerService();
    }
    componentDidMount(){
        this.fetchBeerList();
    }
    fetchBeerList = (data) => {
        this.beerService.beers((response) => {
          this.setState({ beers: response.data });
        });
    }
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
            <div>
                {this.state.beers ? this.state.beers.map(
                        (beerItem, i) => {
                            return ( <BeerItem onDelete={handleDelete} beerItem={beerItem} key={i}/> )
                        }
                    ) : ""} 
            </div>
        );
    }
}

export default BeerList;    