import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
class BeerItem extends Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <div>
                <h2><Link to={`/beer/${this.props.beerItem._id}`}>{this.props.beerItem.name}</Link></h2>
                <button value="update" id={this.props.beerItem._id} onClick={this.props.onUpdate}>update button</button>
                <button value="delete" id={this.props.beerItem._id} onClick={this.props.onDelete}>delete button</button>
                <p>rating : {this.props.beerItem.rating}</p>
            </div>
        );
    }
}
export default BeerItem;