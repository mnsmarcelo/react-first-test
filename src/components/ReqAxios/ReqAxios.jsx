import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReqAxios = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setList(response.data);
            })
    }, []);

    return (<ul>{list.map((item) => (<li key={item.id}>{item.name}</li>))}</ul>);
}

export default ReqAxios;
