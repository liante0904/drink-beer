import React, { Component } from 'react';
import BeerItem from './BeerItem';

class BeerItemList extends Component {
    render(){
        const { beers } = this.props;
        
        const beerList = beers.map(
            ({id, text, checked}) => (
                <BeerItem
                    key={id}
                    text={text}
                    checked={checked}
                    id={id}
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