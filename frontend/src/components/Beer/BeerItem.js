import React, { Component } from 'react';

class BeerItem extends Component {
    render(){
        const { id, beername, checked } = this.props;
        return(
        <div className="beer-item" id={id}>
    {/* <div className='remove'>&times;</div> */}
        <hr></hr>
            <div className="beer-id">
                <span>맥주 아이디 : {id}, </span>
            </div>
            <div className="beer-name">
                <a href=""><span>맥주 이름 : {beername}, </span></a>
            </div>
            <div className="beer-check">
                <span>체크 여부 : {checked ? 'true' : 'false'}</span>
            </div>
        <hr></hr>
        </div>
        );
    };
}

export default BeerItem;