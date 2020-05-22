import React from 'react';

const ListUI = ({list}) => {
    return (<ul>{list.map((item) => (<li key={item}>{item}</li>))}</ul>)
}

export default ListUI;