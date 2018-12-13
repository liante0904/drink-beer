import React, { Component } from 'react';

class BeerItem extends Component {
    render(){
        const { id, beername, checked } = this.props;
        return(
        <div className='beer-item' >
    {/* <div className='remove'>&times;</div> */}
            <div id={id}>
                <div className="beer-id">
                    <span>맥주 아이디 : {id}, </span>
                </div>
                <div className="beer-name">
                    <a href=""><span>맥주 이름 : {beername}, </span></a>
                </div>
                <div className="beer-check">
                    <span>체크 여부 : {checked}</span>
                </div>
            </div>
        </div>
        );
    };
}

export default BeerItem;