import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';


function EditMyBoard(props) {
  const editBoard = props.articles.find(
    thing => `${thing.id}` === props.match.params.id
  );

  if (!props.articles.length || !editBoard) {
    return <h2>Loading article data...</h2>;
  }

  const handleDelete = e => {
    e.preventDefault();
    // axiosWithAuth()
    //   .delete(`/article/${editBoard.id}`)
    //    console.log('delete call is firing')
    //   .then(res => {
    //     props.updateArticles(res.data);
    //     props.history.push("/myboard");
    //   })
    //   .catch(err => console.log(err));
  };

  return (
    <div className="edit-article-wrapper">
      {/* <div className="edit-article-header">
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
      </button> */}
    </div>
  );
}

export default EditMyBoard;
