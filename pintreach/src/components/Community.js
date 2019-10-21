import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { friends } from "./../data.js";

const sHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  padding: 0 3% 0 3%;
  background: grey;
  color: black;
  height: 30%;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
const Friends = styled.div`
  display: flex;
  flex-direction: column;
`;
const Articles = styled.div``;

export const Community = () => {
  //   const [friend, setFriend] = useState([]);

  //   useEffect(() => {
  //     setFriend(

  //     );
  //   }, []);

  return (
    <Body>
      <sHeader>
        <h2>Pintreach</h2>
        {/* <Link to="/my-board">My Board</Link> */}
        {/* <Link to="/community">Community</Link> */}
        {/* <Link to="/log-in">Log Out</Link> */}
        {/* <Route path="/my-board" component={MyBoard} /> */}
        {/* <Route path="/community" component={Community} /> */}
        {/* <Route path="/log-in" component={LoginPage} /> */}
      </sHeader>
      <div className="body">
        <Friends>
          {friends.map(f => {
            return <Link>{f.name}</Link>;
          })}
        </Friends>
        <Articles>
          {friends.map(a => {
            return <Link>{a.articles}</Link>;
          })}
        </Articles>
      </div>
    </Body>
  );
};
