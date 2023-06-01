import React, { useEffect, useReducer, useState } from 'react';
import axios  from 'axios';


const Test01 = () => {
    
    const [data, setData] = useState([])

    useEffect(() => {
        axios.post('/user/getUserList')
        .then(response => setData(response.data))
        .catch(error => console.log(error))

    }, []);


    return (
        <div>
            
            <ul>
            {
                    data.map((item, index) => {
                        return(<li key={index}>{item.id} : {item.name}</li>)
                    })
            }
            </ul>
        </div>
    );
};

export default Test01;