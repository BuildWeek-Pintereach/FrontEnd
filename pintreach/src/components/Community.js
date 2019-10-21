import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { friends } from "./../data.js";

export const Community = () => {
  //   const [friend, setFriend] = useState([]);

  //   setFriend(friends);

  return (
    <div>
      <header>
        <h2>Pintreach</h2>
        {/* <Link to="/my-board">My Board</Link> */}
        <Link to="/community">Community</Link>
        {/* <Link to="/log-in">Log Out</Link> */}
        {/* <Route path="/my-board" component={MyBoard} /> */}
        <Route path="/community" component={Community} />
        {/* <Route path="/log-in" component={LoginPage} /> */}
      </header>
      <div className="friendChooser">
        {/* {friend.map(f => {
          return <Link>{f.name}</Link>;
        })} */}
      </div>
      <div className="friendDisplay"></div>
    </div>
  );
};
