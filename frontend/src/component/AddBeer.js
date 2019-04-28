import React, { Component } from 'react';
import BeerService from '../component/BeerService';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as beerActions from '../store/modules/beer';

class AddBeer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            rating: ''
        }
        this.beerService = new BeerService();
    }
    handleInsert = (e) => {
        
        //console.log("handleInsert => ",this.state)
        //this.beerService.post(this.state, () => {
        //    this.props.history.push('/');
        //});
        const { BeerActions } = this.props;
        BeerActions.addBeer();
    }

    handleChange = (e) => {
        const { BeerActions } = this.props;
        const { name, value } = e.target;
        BeerActions.changeInput({name, value});
        
        //this.setState({
        //    [e.target.name]: e.target.value
        //});
        //console.log(this.state)
    }
    render() {
        const { handleInsert, handleChange } = this;
        const { BeerActions } = this.props;

        return (
            <div>
                <h1>AddBeer</h1>
                <div>
                    <h2>Insert BeerName</h2>
                    <input type="text" name="name" onChange={handleChange}/>
                </div>
                <div>
                    <h2>Insert BeerRating</h2>
                    <input type="text" name="rating" onChange={handleChange}/>
                </div>
                <button type="button" onClick={handleInsert}>Insert</button>
                <button type="button" onClick={BeerActions.addBeer}>redux click(addBeer)</button>
                <div>
                    <h1>this.state value check</h1>
                    <div>{this.state.name} {this.state.rating}</div>
                </div>
            </div>

        );
    }
}

/*
export default connect(
    // state 를 비구조화 할당 해주었습니다
    ({ todo }) => ({
      // immutable 을 사용하니, 값을 조회 할 때엔느 .get 을 사용해주어야하죠.
      input: todo.get('input'),
      todos: todo.get('todos')
    }),
    (dispatch) => ({
      TodoActions: bindActionCreators(todoActions, dispatch)
    })
  )(TodosContainer);
*/


export default connect(
    (state) => ({
        name: state.beer.get('name'),
        rating: state.beer.get('rating')
      }),
    (dispatch) => ({
      BeerActions: bindActionCreators(beerActions, dispatch)
    })
  )(AddBeer); 