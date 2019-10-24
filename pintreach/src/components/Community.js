import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import friends from "./../data.js";
import MyBoard from "./MyBoard";
import LoginPage from "./LoginPage";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
const SHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3% 0 3%;
  background: white;
  color: black;
  height: 60px;
`;
const Friends = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  padding: 0 0 0 5%;
  width: 35%;
`;
const Articles = styled.div`
  padding-right: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;
`;
const Logo = styled.h2`
  padding: 0;
  margin: 0;
`;

const FriendLink = styled.div`
  margin: 20px 0 0 0;
`;

const ArticleCat = styled.h2`
  background: black;
  font-size: 3vw;
  color: white;
  width: 40%;
`;

const ArticleLink = styled.a`
  box-sizing: border-box;
  color: black;
  width: 90%;
`;

const FriendsandArticles = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Community = () => {
  const [userID, setUserID] = useState();
  const [user, setUser] = useState();
  console.log(userID);

    useEffect(() => {
        axiosWithAuth()
            .get('/users')
            .then(res => {
            console.log('the response is...', res);
            setUser(res.data)
            })
        .catch(err => {
            console.log('An error', err);
        });
    },[])
    

    return (
        <Body>
          <SHeader>
            <Logo>Pintreach</Logo>
            <a href='#'>Home</a>
            <Link to="/myboard">My Board</Link>
            <Link to="/login">Log Out</Link>

          </SHeader>
          <div className="body">
            <h1>See What Yours Friends Are Looking Into!</h1>
            <FriendsandArticles>
              <Friends>
                {friends.map((f, index) => {
                  return (
                    <FriendLink key={index}>
                      <h3
                        onClick={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          setUserID(f.id);
                          setUser(f);
                        }}
                      >
                        {f.firstname}
                      </h3>
                    </FriendLink>
                  );
                })}
              </Friends>
              <Articles>
                <ArticleCat>Biology</ArticleCat>
    
                {user &&
                  user.articles.Biology.map(item => {
                    return <Link>{item}</Link>;
                  })}
    
                <ArticleCat>Psychology</ArticleCat>
    
                {user &&
                  user.articles.Psychology.map(item => {
                    return <Link>{item}</Link>;
                  })}
    
                <ArticleCat>Technology</ArticleCat>
    
                {user &&
                  user.articles.Technology.map(item => {
                    return <Link>{item}</Link>;
                  })}
    
                <ArticleCat>Physics</ArticleCat>
    
                {user &&
                  user.articles.Physics.map(item => {
                    return <Link>{item}</Link>;
                  })}
    
                <ArticleCat>Health</ArticleCat>
    
                {user &&
                  user.articles.Health.map(item => {
                    return <Link>{item}</Link>;
                  })}
              </Articles>
            </FriendsandArticles>
          </div>
        </Body>
      );
    };
    
    export default Community;