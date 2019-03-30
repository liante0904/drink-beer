import React, { Component } from 'react';

export default class BeerItem extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.beerItem.name}</h2>
                <button value="update" id={this.props.beerItem._id} onClick={this.props.onUpdate}>update button</button>
                <button value="delete" id={this.props.beerItem._id} onClick={this.props.onDelete}>delete button</button>
                <p>rating : {this.props.beerItem.rating}</p>
            </div>
        );
    }
}