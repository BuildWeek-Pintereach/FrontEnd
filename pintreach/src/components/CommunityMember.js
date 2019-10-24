import React from 'react';

const CommunityMember = ({ friend }) => {
    const {name, age, email } = friend;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h4>Age: {age}</h4>
            <h5>Email: {email}</h5>
        </div>
    )
};

export default CommunityMember;