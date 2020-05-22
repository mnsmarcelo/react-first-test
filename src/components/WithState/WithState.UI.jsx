import React from 'react';

const WithStateUI = ({isClicked, setClicked}) => {
    return (<button onClick={() => {setClicked(!isClicked)}}>{isClicked ? 'Verdadeiro' : 'Falso'}</button>);
}

export default WithStateUI;