import React, { Component } from 'react';
import BeerListTemplate from '../components/BeerListTemplate';

class Beer extends Component {


id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',    
    test: '맥주테스트',
    beers: [
      { id: 0, text: ' 오비맥주', checked: false },
      { id: 1, text: ' 하이트', checked: true },
      { id: 2, text: ' 1664', checked: false }
    ]

  }
  
render(){
    const { input, beers } = this.state;
    const beerList = beers.map(
        ({id, text, checked}) => (
            <div>
            <span>맥주 아이디 : {id}, </span>
            <span>맥주 이름: {text}, </span>
            <span>맥주 체크 : {checked.toString()}, </span>
            </div>
        )
    );
    return(
        <div>
                <span>맥주 이름: {this.state.test}</span>
                {beerList}
            <BeerListTemplate>
            </BeerListTemplate>
        </div>
    );
};

}
export default Beer;