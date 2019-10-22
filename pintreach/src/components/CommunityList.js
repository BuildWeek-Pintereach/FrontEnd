import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { friends } from "./../data.js";
import { MyBoard } from "./MyBoard";
import { LoginPage } from "./LoginPage";

export const CommunityList = props => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState("");
  console.log("this", props);

  const whenClicked = event => {
    event.preventDefault();
    setList(
      friends.map(f => {
        return (
          <div>
            <Link to="/community/">{f.articles.props.category}}</Link>
          </div>
        );
      })
    );
  };

  return (
    <div>
      <Link></Link>
      <Route />
    </div>
  );
};
