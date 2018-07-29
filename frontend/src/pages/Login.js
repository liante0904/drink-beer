import React from 'react';
import queryString from 'query-string';

const Login = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);
    const detail = query.detail === 'true';

    return(
        <div>
            <div>
            여기는 login임!! {match.params.name}
            </div>
            <div>
            
            {detail && 'detail 출력 : ' + query.detail}

            </div>
        </div>
    );
};
export default Login;