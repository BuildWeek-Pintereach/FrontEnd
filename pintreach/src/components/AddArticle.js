import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddArticle = () => {
  const [article, setArticle] = useState({
    title: "",
    link: ""
  });
  article['token']='asdf'
  console.log('an article', article);

  const handleChange = event => {
    setArticle({
      ...article,
      [event.target.name]: event.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/users/articles", article)
      
      .then(res => {
          console.log('is posting')
        setArticle({
          ...article,
          title: "",
          link: ""
        });
      })
      .catch(err => console.log("it did not work", err.response));
  };

  return (
    <div className="add-article">
      <main>
        <div>
          <form onSubmit={submitForm}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
              value={article.title}
            />

            <label htmlFor="link">Link:</label>
            <input
              type="text"
              placeholder="link"
              name="link"
              onChange={handleChange}
              value={article.link}
            />
            <button type="submit" className="add-button">
              Add Article
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
export default AddArticle;
