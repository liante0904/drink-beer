import React, { Component } from 'react';

class BeerEditorTemplate extends Component {
    
    render(){
        const { editor } = this.props;
        return (
            <div className="beer-editor-template">
                <div className="beer-editor-form">
                    {editor}
                </div>
            </div>
        );
    }
};

export default BeerEditorTemplate;