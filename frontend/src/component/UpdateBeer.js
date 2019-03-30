import React, { Component } from 'react';
import BeerService from '../component/BeerService';

class UpdateBeer extends Component {
    constructor(props){
        super(props);
        this.state = {
            _id: '',
            name: '',
            rating: ''
        }
        this.beerService = new BeerService();
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        if(id) this.getBeerById(id);
    }
    getBeerById = (id) => {
        console.log('UpdateBeer component',id);
        this.beerService.get(id, (response) => {
            this.setState(response.data);
            console.log('this.state : ',this.state);
        });
    }
    handleUpdate = (e) => {
        console.log("handleUpdate => ",this.state)
        this.beerService.put(this.state, (response) => {
            console.log( response.status )
            if(response.status === 200) this.props.history.push('/');
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state)
    }
    render() {
        const { handleUpdate, handleChange } = this;
        return (
            <div>
                <h1>UpdateBeer</h1>
                <div>
                    <h2>Insert BeerName</h2>
                    <input type="text" name="name" onChange={handleChange} value={this.state.name}/>
                </div>
                <div>
                    <h2>Insert BeerRating</h2>
                    <input type="text" name="rating" onChange={handleChange} value={this.state.rating}/>
                </div>
                <button type="button" onClick={handleUpdate}>Update</button>
                <div>
                    <h1>this.state value check</h1>
                    <div>{this.state.name} {this.state.rating}</div>
                </div>
            </div>

        );
    }
}

export default UpdateBeer; 