import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { friends } from "./../data.js";
import { MyBoard } from "./MyBoard";
import { LoginPage } from "./LoginPage";

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
  color: white;
`;

const FriendsandArticles = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Community = () => {
  //   const [friend, setFriend] = useState([]);

  //   useEffect(() => {
  //     setFriend(

  //     );
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
            {friends.map(f => {
              return (
                <FriendLink>
                  <Link>{f.name}</Link>
                  <Route path={`/community/${f.name}`} component={Community} />
                </FriendLink>
              );
            })}
          </Friends>
          <Articles>
            <ArticleCat>Biology</ArticleCat>
            {friends.map(f => {
              return (
                <FriendLink>
                  <Link>{f.articles.Biology}</Link>
                </FriendLink>
              );
            })}
            <ArticleCat>Psychology</ArticleCat>
            {friends.map(f => {
              return (
                <FriendLink>
                  <Link>{f.articles.Psychology}</Link>
                </FriendLink>
              );
            })}
            <ArticleCat>Technology</ArticleCat>
            {friends.map(f => {
              return (
                <FriendLink>
                  <Link>{f.articles.Technology}</Link>
                </FriendLink>
              );
            })}
            <ArticleCat>Physics</ArticleCat>
            {friends.map(f => {
              return (
                <FriendLink>
                  <Link>{f.articles.Physics}</Link>
                </FriendLink>
              );
            })}
            <ArticleCat>Health</ArticleCat>
            {friends.map(f => {
              return (
                <FriendLink>
                  <Link>{f.articles.Health}</Link>
                </FriendLink>
              );
            })}
          </Articles>
        </FriendsandArticles>
      </div>
    </Body>
  );
};
