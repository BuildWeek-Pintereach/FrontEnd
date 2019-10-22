import React from "react";


//this page needs:
//The code in ddArticle is going in here--and the form + action is staying in AddArticle
// --A "Welcome" message--Ideally one that says welcome {username} (ideal but not required)

// --Add 'Edit Article' and 'Delete Article' Buttons on MyBoard
// --Link to Community page (do we need edit and delete buttons here???)

function MyBoard(props) {

  function routeToArticle(ev, article) {
    ev.preventDefault();
    props.history.push(`/article-list/${article.id}`);
  }
  return (
    <div className="articles-list-wrapper">
      {props.articles.map(article => (
        <div
          onClick={ev => routeToArticle(ev, article)}
          className="article-card"
          key={article.id}
        >
          <h2>{article.category}</h2>
          <h2>{article.title}</h2>
          <h2>{article.link}</h2>
        </div>
      ))}
    </div>
  );
}

export default MyBoard;
