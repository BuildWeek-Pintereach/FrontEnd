import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';


function DeleteArticle(props) {
  const handleDelete = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/users/${props.article.user_id}/articles/${props.article.id}`)
      //  console.log('delete call is firing')
      .then(res => {
        props.history.push("/myboard");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="edit-article-wrapper">
      <button className="md-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default DeleteArticle;
