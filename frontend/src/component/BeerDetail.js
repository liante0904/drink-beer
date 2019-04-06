import React, { Component } from 'react';
import BeerService from '../component/BeerService';


class BeerDetail extends Component {
    constructor(props){
        super();
        this.state = {};
        this.beerService = new BeerService();
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        this.fetchBeer(id);
    }
    fetchBeer = (id) => {
        console.log('fetchBeer component',id);
        this.beerService.get(id, (response) => {
            this.setState(response.data);
            console.log('this.state : ',this.state);
        });
    }
    render() {
        return (
            <div>
                <p>
                    this is BeerDetail!!!!
                </p>
                
                <p>
                    this beer id : { this.state._id }
                </p>
                <p>
                    this beer name : { this.state.name }
                </p>
                <p>
                    this beer rating : { this.state.rating }
                </p>
                <p>
                    this beere create?? date { this.state.create_date }
                </p>
    
            </div>
        );
    }
}

export default BeerDetail;