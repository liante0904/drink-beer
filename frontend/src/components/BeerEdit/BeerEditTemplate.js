import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class BeerEditTemplate extends Component {
    onSubmit = () => {
        alert('tt');
    }
    render(){
        const { submit, onSubmit  } = this.props;

        return (
            <div>
                <div>
                    <h2>맥주 아이디</h2>
                    <input type="text" placeholder="beer-id"></input>
                </div>
                <div>
                    <h2>맥주 이름</h2>
                    <input type="text" placeholder="beer-name"></input>
                </div>
                <div>
                    <button type="button" onClick={onSubmit}>전송하기</button>
                </div>
                <div>
                    submit
                    {submit}
                </div>
            </div>
        );

    }
};

export default BeerEditTemplate;