import React, { Component } from 'react';
import BeerService from '../component/BeerService';

class AddBeer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'dddd',
            rating: 12334
        }
        this.beerService = new BeerService();
    }
    handleInsert = (e) => {
        this.insertBeer(this.state);
    }
    insertBeer = (data) => {
        this.beerService.post(data);
    }
    handleChange = (e) => {
        //const { name, value } = e.target;
        const { target: { name, value } } = e;
        this.setState({ [name]: value });
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
            </div>
        );
    }
}

export default AddBeer; 