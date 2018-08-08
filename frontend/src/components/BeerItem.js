import React, { Component } from 'react';

class BeerItem extends Component {
    render(){
        const { text, id } = this.props;
        return(
        <div className='beer-item' >
            <div className='remove'>&times;</div>
        <div>
            <div>{text}</div>
        </div>
        </div>
        );
    };
}

export default BeerItem;