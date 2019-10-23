import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import friends from "./../data.js";

export default function SearchForm(props) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredFriend, setFilteredFriend] = useState([]);

  // setData(friends);

  // useEffect(() => {
  //   axios
  //     .get(``)
  //     .then(response => {

  //     });
  // }, []);

  //filter through collected data that is held in state
  useEffect(() => {
    setFilteredFriend(
      data.filter(friend =>
        friend.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  //does a render of the new search data
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          placeholder="search by name"
        />
      </form>
      <div>
        {/* now map through the new filtered data */}
        {filteredFriend.map(data => {
          return (
            <div key={data._id}>
              <h2>{data.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
