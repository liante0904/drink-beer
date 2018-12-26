import React, { Component } from 'react';
// redux 예제
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';

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
        if (input == '') {
            alert("맥주를 입력하세요.");
            return; 
        }
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
       <PageTemplate>
           <ListWrapper>
               <ListContainer/>
           </ListWrapper>
       </PageTemplate>
    );
};

}
export default Beer;