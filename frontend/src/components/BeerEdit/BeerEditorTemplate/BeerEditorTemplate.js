import React, { Component } from 'react';

class BeerEditorTemplate extends Component {
    
    render(){
        const { editor, submit } = this.props;

        return (
            <div className="beer-editor-template">
                <div className="beer-editor-form">
                    {editor}
                </div>
                <div className="beer-editor-submit-button">
                    {submit}
                </div>
            </div>
        );
    }
};

export default BeerEditorTemplate;