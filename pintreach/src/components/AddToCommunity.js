import React, { useState } from 'react';
// import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios';

const AddFriends = () => {
    const [info, setInfo] = useState({firstname:'', lastname:'', articles:''});

    const handleChanges = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        // e.preventDefault();
        axios
            .post('https://pintereach-be.herokuapp.com/users', info)
            .then(res => {
                setInfo({
                    ...info,
                    firstname:'',
                    lastname:'',
                    articles:[]
                })
            })
            .catch(err => console.log("an error", err.response));
    };

    return (
        <div className='friend-info'>
        <form onSubmit={onSubmit}>
            <input type="text" name="firstname" value={info.firstname} placeholder="Add friend's name..." onChange={handleChanges} />
            <input type="text" name="lastname" value={info.lastname} placeholder="Add friend's age" onChange={handleChanges} />
            <input type="text" name="articles" value={info.articles} placeholder="Add friend's email..." onChange={handleChanges} />
            <button type="submit">Add New Friend</button>
        </form>
        </div>
    );
    
};

export default AddFriends;
