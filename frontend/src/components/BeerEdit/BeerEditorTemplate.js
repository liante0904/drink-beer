import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class BeerEditorTemplate extends Component {
    onSubmit = () => {
        alert('tt');
    }
    render(){
        const { editor, submit, onSubmit  } = this.props;

        return (
            <div className="beer-edit-template">
                {editor}
                {submit}
            </div>
        );

    }
};

export default BeerEditorTemplate;