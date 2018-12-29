import React, { Component } from 'react';
import BeerEditor from 'components/Beer/BeerEditor'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/beerEdit';

class BeerEditorContainer extends Component {

    handleChangeInput = ({beerId, beerName}) => {
        console.log('beerId :' + beerId + "\n beerName : " + beerName);
    }

    render() {
        const { beerId, beerName } = this.props;
        const { handleChangeInput } =  this;
        return (
            <BeerEditor
              beerId={beerId}
              beerName={beerName}
              onChangeInput={handleChangeInput}
            />

        );
    }
}

export default BeerEditorContainer;
/*
export default connect(
    (state) => ({
      beerId: state.editor.get('beerId'),
      beerName: state.editor.get('beerName')
    }),
    (dispatch) => ({
      EditorActions: bindActionCreators(editorActions, dispatch)
    })
  )(BeerEditorContainer);
  */