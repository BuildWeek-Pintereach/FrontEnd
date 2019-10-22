import React from "react";


//this page needs:
// --A "Welcome" message--Ideally one that says welcome {username}
// --A List of "My Articles" -- located in reducers file
// --Add 'Edit Article' and 'Delete Article' Buttons on MyBoard
// --Link to Community page (do we need edit and delete buttons here???)

function MyBoard(props) {
  const routeToArticle = (ev, article) => {
    ev.preventDefault();
    props.history.push(`/articles-list/${article.id}`);
  }
  return (
    <div className="articles-list-wrapper">
      {props.articles.map(article => (
        <div
          onClick={ev => routeToArticle(ev, article)}
          className="article-card"
          key={article.id}
        >
          <p>{article.category}</p>
          <p>{article.title}</p>
          <p>{article.link}</p>
        </div>
      ))}
    </div>
  );
}

export default MyBoard;
