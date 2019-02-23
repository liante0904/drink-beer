import React, { Component } from 'react';
// redux 예제
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';

class Beers extends Component {
    render(){
        return(
        <PageTemplate>
            <ListWrapper>
                <ListContainer/>
            </ListWrapper>
        </PageTemplate>
        );
    };
}
export default Beers;