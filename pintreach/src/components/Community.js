import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import friends from "./../data.js";
import MyBoard from "./MyBoard";
import axios from "axios";
import LoginPage from "./LoginPage";
import axios from 'axios';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 23vh;
  background: rgba(83, 104, 126, 1);
  h1 {
    color: rgba(245, 221, 221, 1);
    font-size: 3.5vw;
  }
`;

const Friends = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  
  width: 35%;
  max-width: 35%;
  form{
    margin 0;
    width: 100%;
  }
`;

const Search = styled.div`
  width: 100%;
  input {
    width: 70%;
  }
`;

const Articles = styled.div`
  padding-right: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;
  max-width: 65%;
`;
const Logo = styled.h2`
  padding: 0;
  margin: 0;
`;

const FriendLink = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0 0;
  color: rgba(194, 178, 180, 0.7);
  &:hover {
    color: rgba(245, 221, 221, 1);
  }
  background: rgba(58, 68, 84, 0.9);
  border-radius: 10px;
  height: 5vw;
  width: 80%;
  font-size: 1.4vw;
`;

const ArticleCat = styled.h2`
  background: rgba(58, 68, 84, 0.9);
  border-radius: 10px;
  font-size: 3vw;
  padding: 2%;
  color: rgba(245, 221, 221, 1);
  width: 90%;
  max-width: 90%;
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
  margin-bottom: 40px;
`;

const LinkDiv = styled.div`
  width: 80%;
  max-width: 80%;
  padding: 2%;
  background-color: rgba(58, 68, 84, 0.9);
  border-radius: 7px;
  a {
    text-align: center;
    color: rgba(194, 178, 180, 0.7);
    &:hover {
      color: rgba(245, 221, 221, 1);
    }

    text-decoration: none;
    word-wrap: break-word;
    width: 100%;
    font-size: 1.8vw;
  }
`;

const StyledMyBoard = styled.div`
  .outer {
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 2%;
    background-color: rgba(58, 68, 84, 0.9);

    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;
    border-bottom: 3px solid rgba(107, 78, 113, 1);
    top: 0%;
    max-height: 15vh;
  }

  div {
    width: 49%;
    text-align: center;
    h1 {
      color: rgba(245, 221, 221, 1);
      font-size: 4.3vw;
      margin: 2% 0 0 0;
    }
    h2 {
      color: rgba(245, 221, 221, 1);
      font-size: 2.5vw;
      padding-bottom: 10px;
    }
  }

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 49%;

    a {
      width: 20%;
      padding: 2%;
      text-decoration: none;

      font-size: 2vw;
      text-align: center;
      border-bottom: 3px solid rgba(107, 78, 113, 1);
      border-radius: 15%;
      color: rgba(194, 178, 180, 0.7);
      &:hover {
        color: rgba(245, 221, 221, 1);
      }
    }
  }
`;

const Community = props => {
  const [userID, setUserID] = useState();
  const [user, setUser] = useState();

    useEffect(() => {
  //     axios
  //       .get(`https://pintereach-be.herokuapp.com/${id}/articles`)
  //       .then(response => {
  //         console.log("response", response);
  //       })
  //       .catch(error => {
  //         console.error("Server Error", error);
  //       });
    }, []);

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
