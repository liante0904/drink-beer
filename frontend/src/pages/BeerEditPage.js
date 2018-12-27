import React from 'react';
import BeerEditTemplate from 'components/BeerEdit/BeerEditTemplate'
import BeerSubmitContainer from 'containers/beer/BeerSubmitContainer'
const BeerEditPage = () => {

    return (
        <BeerEditTemplate
        submit={<BeerSubmitContainer/>}/>
    );
}
export default BeerEditPage;