import React, { Component } from 'react';
import BeerEditor from 'components/BeerEdit/BeerEditor'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';

class BeerEditorContainer extends Component {
    handleChangeInput = ({ name, value }) => {
        const { EditorActions } = this.props;
        EditorActions.changeInput({name, value});
    }
    handleSubmit = () => {
        const { beerId, beerName, EditorActions } = this.props;
        const beers = Map({
          beerId:  beerId,
          beerName: beerName,
          tags: '',
        });
        EditorActions.ADD_BEER(beers);
        console.log('handleSubmit');
    }

    render() {
        const { beerId, beerName } = this.props;
        const { handleChangeInput, handleSubmit } = this;
        return (
            <BeerEditor
              beerId={beerId}
              beerName={beerName}
              onChangeInput={handleChangeInput}
              onSubmit={handleSubmit}
            />
        );
    }
}

export default connect(
    (state) => ({
        beerId: state.editor.get('beerId'),
        beerName: state.editor.get('beerName'),
        tags: state.editor.get('tags')
      }),
      (dispatch) => ({
        EditorActions: bindActionCreators(editorActions, dispatch)
      })
  )(BeerEditorContainer);