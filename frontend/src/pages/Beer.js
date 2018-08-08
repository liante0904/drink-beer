import React, { Component } from 'react';
import BeerListTemplate from '../components/BeerListTemplate';
import BeerItemList from '../components/BeerItemList'
import Form from '../components/Form';
class Beer extends Component {


id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: 'asd',    
    test: '맥주테스트',
    beers: [
      { id: 0, text: ' 오비맥주', checked: false },
      { id: 1, text: ' 하이트', checked: true },
      { id: 2, text: ' 1664', checked: false }
    ]
  }
  handleChange = (e) => {
      this.setState({
          input: e.target.value
      });
  }
render(){
    const { input, beers } = this.state;
    const {
        handleChange
    } = this;
    // const beerList = beers.map(
    //     ({id, text, checked}) => (
    //         <div>
    //         <span>맥주 아이디 : {id}, </span>
    //         <span>맥주 이름: {text}, </span>
    //         <span>맥주 체크 : {checked.toString()}, </span>
    //         </div>
    //     )
    // );
    return(        
        <BeerListTemplate form={(
            <Form
                value={input}
                onChange={handleChange}
            />
        )}>    
            <BeerItemList beers={beers}/>
        </BeerListTemplate>
    );
};

}
export default Beer;