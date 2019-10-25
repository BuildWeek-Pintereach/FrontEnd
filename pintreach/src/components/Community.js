import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import axios from "axios";



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
  width: 90%;
  max-width: 90%;
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

const FriendsandArticles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center
  max-width: 100%;
  margin-bottom: 40px;
`;

const LinkDiv = styled.div`
  width: 80%;
  max-width: 80%;
  padding: 2%;
  background-color: rgba(58, 68, 84, 0.9);
  border-radius: 7px;
  margin-bottom: 2%;
  color: rgba(194, 178, 180, 0.7);
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

const Community = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  /////////////////Grab Users

  useEffect(() => {
    const results = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [articles, searchTerm]);

  useEffect(() => {
    axios
      .get(`https://bw-backend.herokuapp.com/articles/`)
      .then(response => {
        console.log("This is users", response);
        setArticles(response.data);
        setSearchResults(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  ////////////////////Search Form

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <Body>
      <header>
        <StyledMyBoard>
          <div className="outer">
            <div>
              <h1>Pintereach</h1>
              <h2>Your References Consolidated</h2>
            </div>
            <nav>
              <Link to="/add-article">Add Article</Link>
              <a href="/myboard">My Board</a>
              <Link to="/login">Log Out</Link>
            </nav>
          </div>
        </StyledMyBoard>
      </header>
      <div className="body">
        <h1>See What Others Are Looking Into!</h1>
        <FriendsandArticles>
          <Articles>
            <Search>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
              />
            </Search>
            <ArticleCat>Community Articles</ArticleCat>
            {searchResults.map(item => {
              return (
                <LinkDiv>
                  <h3>{item.title}</h3>
                  <a href={item.link}>{item.link}</a>
                </LinkDiv>
              );
            })}
            {/* <LinkDiv>
            {user &&
                user.articles.Biology.map(item => {
                  return <a>{item}</a>;
                })}
          </LinkDiv>
       <ArticleCat>Psychology</ArticleCat>
            <LinkDiv>
              {user &&
                user.articles.Psychology.map(item => {
                  return <a>{item}</a>;
                })}
            </LinkDiv>
            <ArticleCat>Technology</ArticleCat>
            <LinkDiv>
              {user &&
                user.articles.Technology.map(item => {
                  return <a>{item}</a>;
                })}
            </LinkDiv>
            <ArticleCat>Physics</ArticleCat>
            <LinkDiv>
              {user &&
                user.articles.Physics.map(item => {
                  return <a>{item}</a>;
                })}
            </LinkDiv>
            <ArticleCat>Health</ArticleCat>
            <LinkDiv>
              {user &&
                user.articles.Health.map(item => {
                  return <a>{item}</a>;
                })}
            </LinkDiv> */}
          </Articles>
        </FriendsandArticles>
      </div>
    </Body>
  );
};

export default Community;
