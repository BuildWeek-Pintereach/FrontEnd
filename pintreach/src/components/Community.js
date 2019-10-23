import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { friends } from "./../data.js";
import MyBoard from "./MyBoard";
import axios from "axios";
import LoginPage from "./LoginPage";
import { CommunityList } from "./CommunityList.js";

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
  max-width: 90%;
`;

const FriendsandArticles = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
`;

const LinkDiv = styled.div`
  max-width: 50%;
  a {
    text-align: center;
    color: red;
    text-decoration: none;
    word-wrap: break-word;
  }
`;

export const Community = () => {
  const [userID, setUserID] = useState();
  const [user, setUser] = useState();

  //   useEffect(() => {
  //     axios
  //       .get(`https://pintereach-be.herokuapp.com/${id}/articles`)
  //       .then(response => {
  //         console.log("response", response);
  //       })
  //       .catch(error => {
  //         console.error("Server Error", error);
  //       });
  //   }, []);

  return (
    <Body>
      <SHeader>
        <Logo>Pintreach</Logo>
        <Link to="/my-board">My Board</Link>
        <Link to="/community">Community</Link>
        <Link to="/log-in">Log Out</Link>
        <Route path="/my-board" component={MyBoard} />
        <Route path="/community" component={Community} />
        <Route path="/log-in" component={LoginPage} />
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
                    {f.name}
                  </h3>
                </FriendLink>
              );
            })}
          </Friends>
          <Articles>
            <ArticleCat>Biology</ArticleCat>
            <LinkDiv>
              {user &&
                user.articles.Biology.map(item => {
                  return <a>{item}</a>;
                })}
            </LinkDiv>
            <ArticleCat>Psychology</ArticleCat>
            <LinkDiv>
              {user &&
                user.articles.Psychology.map(item => {
                  return <Link>{item}</Link>;
                })}
            </LinkDiv>
            <ArticleCat>Technology</ArticleCat>
            <LinkDiv>
              {user &&
                user.articles.Technology.map(item => {
                  return <Link>{item}</Link>;
                })}
            </LinkDiv>
            <ArticleCat>Physics</ArticleCat>
            <LinkDiv>
              {user &&
                user.articles.Physics.map(item => {
                  return <Link>{item}</Link>;
                })}
            </LinkDiv>
            <ArticleCat>Health</ArticleCat>
            <LinkDiv>
              {user &&
                user.articles.Health.map(item => {
                  return <Link>{item}</Link>;
                })}
            </LinkDiv>
          </Articles>
        </FriendsandArticles>
      </div>
    </Body>
  );
};
