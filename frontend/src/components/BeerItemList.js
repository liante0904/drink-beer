import React, { Component } from 'react';
import BeerItem from './BeerItem';

class BeerItemList extends Component {
    render(){
        const { beers } = this.props;
        
        const beerList = beers.map(
            ({ _id, beername, beerid, checked}) => (
                <BeerItem
                    _id={_id}
                    beername={beername}
                    beerid={beerid}
                    checked={checked}
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