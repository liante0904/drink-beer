import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BeerListTemplate from '../components/BeerListTemplate';
import BeerItemList from '../components/BeerItemList'
import BeerForm from '../components/BeerForm';
import * as service from '../services/post';
import { error } from 'util';

class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        input: 'asd',    
        test: '맥주테스트',
        beers: []
        };
      }

// id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

//   state = {
//     input: 'asd',    
//     test: '맥주테스트',
//     beers: [
//       { id: 0, beername: ' 오비맥주', checked: false },
//       { id: 1, beername: ' 하이트', checked: true },
//       { id: 2, beername: ' 1664', checked: false }
//     ]
//   }
  fetchPostInfo = async (postId) => {
    const post = await service.getPost(postId);
    console.log(post);
    //const comments = await service.getComments(postId);
    //console.log(comments);
}

componentDidMount(){
    fetch('/beers')
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result)
            this.setState({
                beers: result
            });
        },
        (error) => {
            console.log(error);
            this.setState({
               error 
            });
        }
    )
    // this.fetchPostInfo(1);
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
    return(    
        <BeerListTemplate form={(
            <BeerForm
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