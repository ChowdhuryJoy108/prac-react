import React from 'react';

const Change = (props) => {
   
    return (
        <div>
            <button onClick={props.change}>Change</button>
        </div>
    );
};

export default Change;