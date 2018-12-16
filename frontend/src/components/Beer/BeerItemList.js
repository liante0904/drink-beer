import React, { Component } from 'react';
import BeerItem from './BeerItem';

class BeerItemList extends Component {
    render(){
        const { beers } = this.props;
        console.log("beers : " + JSON.stringify(beers));
        const beerList = beers.map(
            ({id, beername, checked}) => (
                <BeerItem
                    id={id}
                    beername={beername}
                    checked={checked}
                    key={id}
                />
            )
        );
        return(
            <div>
                {beerList}
            </div>
        );
    }
}

export default BeerItemList;