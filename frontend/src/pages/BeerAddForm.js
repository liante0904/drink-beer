import React from 'react';

const BeerAddForm = () => {
    return (
        <form>
            <div>
            <h2>맥주 아이디</h2>
            <input />
            </div>
            <div>
            <h2>맥주 이름</h2>
            <input />
            </div>
            <input value="전송하기" type="submit" />
        </form>
    );
}
export default BeerAddForm;