import React from 'react';
import BeerEditTemplate from 'components/BeerEdit/BeerEditTemplate'

const BeerEditPage = ({onSubmit}) => {
    return (

        <div>
        <BeerEditTemplate/>
        <form>
            <div>
            <h2>맥주 아이디</h2>
                <input type="text" placeholder="beer-id"></input>
            </div>
            <div>
            <h2>맥주 이름</h2>
                <input type="text" placeholder="beer-name"></input>
            </div>
            <button type="button" onClick={onSubmit}>전송하기</button>
        </form>
        </div>

    );
}
export default BeerEditPage;