import React from 'react';
import styled from 'styled-components';

const ArticleLink = styled.a`
  box-sizing: border-box;
  color: black;
  width: 90%;
`;

const CommunityMember = ({ friend }) => {
    const {firstname, lastname, articles } = friend;
    return (
        <div>
            <h3>First Name: {firstname}</h3>
            <h4>Last Name: {lastname}</h4>
            <ArticleLink>Articles: {articles}</ArticleLink>
        </div>
    )
};

export default CommunityMember;