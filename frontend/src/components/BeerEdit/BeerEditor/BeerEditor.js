import React, { Component } from 'react';

class BeerEditor extends Component {
    
    handleChange = (e) => {
        const { onChangeInput } = this.props;
        const { beerId, beerName } = e.target;
        onChangeInput({beerName, beerId});
    }
    render() {
        const { handleChange } = this;
        const { beerId, beerName } = this.props;

        return (
            <div className="beer-edit-template">
                <h2>맥주 아이디</h2>
                <input
                  placeholder="맥주 아이디를 입력하세요" 
                  name="beerId"
                  value={beerId}
                  onChange={handleChange}
                />
                <h2>맥주 이름</h2>
                <input 
                  placeholder="맥주 이름을 입력하세요." 
                  name="beerName"
                  value={beerName}
                  onChange={handleChange}
                />
            </div>
        );
    }
}

export default BeerEditor;