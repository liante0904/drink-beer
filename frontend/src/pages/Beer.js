import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BeerListTemplate from '../components/Beer/BeerListTemplate';
import BeerItemList from '../components/Beer/BeerItemList'
import BeerForm from '../components/Beer/BeerForm';
import * as service from '../services/post';
import { error } from 'util';

class Beer extends Component {
    
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
      input: '',    
      beers: [
        { id: 0, beername: '오비맥주', checked: false },
        { id: 1, beername: '하이트', checked: true },
        { id: 2, beername: '1664', checked: false }
      ]
  }
  // input 입력값 이벤트
  handleChange = (e) => {
    this.setState({
        input: e.target.value
    });
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
        alert("handleKeyPress bind : " + e.key);
        this.handleCreate();
      }
  }
  handleCreate = (e) => {
    const { input, beers } = this.state;
      this.setState({
        input: '', // 인풋 초기화
        // concat 을 사용하여 배열에 추가
        beers: beers.concat({
        id: this.id++,
        beername: input,
        checked: true
        })
      });
  }
render(){
    const { input, beers } = this.state;
    const {
        handleKeyPress,
        handleChange,
        handleCreate
    } = this;
    return(    
        <BeerListTemplate form={(
            <BeerForm
                value={input}
                onKeyPress={handleKeyPress}
                onChange={handleChange}
                onCreate={handleCreate}
            />
        )}>    
            <BeerItemList beers={beers}/>
        </BeerListTemplate>
    );
};

}
export default Beer;