import React, { Component } from 'react';

class BeerEditor extends Component {
    handleChange = (e) => {
        const { onChangeInput } = this.props;
        const { beerId, beerName } = e.target;
        onChangeInput({beerId, beerName});
    }
    render() {
        const { beerId, beerName } = this.props;
        const { handleChange } = this;
        return (
            <div className="beer-edit-template">
                <div className="beer-id">
                    <h2>맥주 아이디</h2>
                    <input 
                      type="text" 
                      placeholder="beer-id"
                      value={beerId}
                      onChange={handleChange}
                    />
                </div>
                <div className="beer-name">
                    <h2>맥주 이름</h2>
                    <input 
                      type="text" 
                      placeholder="beer-name" 
                      value={beerName}
                      onChange={handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default BeerEditor;