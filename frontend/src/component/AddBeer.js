import React, { Component } from 'react';
import BeerService from '../component/BeerService';

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
        console.log("handleInsert => ",this.state)
        this.beerService.post(this.state, () => {
            this.props.history.push('/');
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state)
    }
    render() {
        const { handleInsert, handleChange } = this;
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
                <div>
                    <h1>this.state value check</h1>
                    <div>{this.state.name} {this.state.rating}</div>
                </div>
            </div>

        );
    }
}

export default AddBeer; 