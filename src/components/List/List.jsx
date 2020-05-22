import React from 'react';

import ListUI from './List.UI';

const List = () => {
    const list = [
        'Marcelo',
        'Neves',
        'Sousa',
    ];
    return (<ListUI list={list} />);
}

export default List;

