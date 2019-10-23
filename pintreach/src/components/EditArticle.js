import React from "react";
import axios from 'axios';


function EditArticle(props) {
  const article = props.articles.find(
    thing => `${thing.id}` === props.match.params.id
  );

  if (!props.articles.length || !article) {
    return <h2>Loading article data...</h2>;
  }

  const handleDelete = e => {
    e.preventDefault();
    // axios
    //   .delete(`https://pintereach-be.herokuapp.com/article/${id}`)
    //    console.log('delete call is firing')
    //   .then(res => {
    //     props.updateArticles(res.data);
    //     props.history.push("/myboard");
    //   })
    //   .catch(err => console.log(err));
  };

  return (
    <div className="edit-article-wrapper">
      <div className="edit-article-header">
        <div className="edit-title-wrapper">
          <h2>{article.category}</h2>
          <h2>{article.title}</h2>
          <h2>{article.link}</h2>
        </div>
      </div>
      
      <button
        className="md-button"
        onClick={() => props.history.push(`/edit-article/${article.id}`)}
      >
        Edit
      </button>
      <button className="md-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default EditArticle;
