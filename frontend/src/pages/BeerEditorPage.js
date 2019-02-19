import React from 'react';
import BeerEditorTemplate from 'components/BeerEdit/BeerEditorTemplate'
import BeerEditorContainer from 'containers/beer/BeerEditorContainer'
//import BeerSubmitContainer from 'containers/beer/BeerSubmitContainer'

const BeerEditorPage = () => {
    return (
        <BeerEditorTemplate
        editor={<BeerEditorContainer/>}
        />
    );
}

export default BeerEditorPage;