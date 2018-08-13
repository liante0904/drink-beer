import React, { Component } from 'react';

class BeerItem extends Component {
    render(){
        const { _id, beername, beerid, checked } = this.props;
        return(
        <div className='beer-item' >
            <div className='remove'>&times;</div>
        <div>
            <div id={_id}>
            <span>맥주 아이디 : {beerid}, </span>
            <a href=""><span>맥주 이름 : {beername}, </span></a>
            맥주 key : {_id}
            </div>
        </div>
        </div>
        );
    };
}

export default BeerItem;