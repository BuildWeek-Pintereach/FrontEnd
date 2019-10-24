import React, { useState, useEffect } from 'react';

import CommunityMember from './CommunityMember';
import AddToCommunity from './AddToCommunity';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

const Community = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axios
            .get('https://pintereach-be.herokuapp.com/users')
            .then(res => {
            console.log('the response is...', res);
            setFriends(res.data)
            })
        .catch(err => {
            console.log('An error', err);
        });
    },[])
    

    return (
        <div className="friends-list">
            <AddToCommunity />
            {friends.map(friend => (
                <CommunityMember key={friend.id} friend={friend}/>
            ))}
        </div>
    )
}

export default Community;