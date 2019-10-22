import React from "react";
import { axiosWithAuth } from "axios";


function EditArticle(props) {
  const item = props.items.find(
    thing => `${thing.id}` === props.match.params.id
  );

  if (!props.items.length || !item) {
    return <h2>Loading item data...</h2>;
  }

  const handleDelete = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(``)
      .then(res => {
        props.updateItems(res.data);
        props.history.push("/article-list");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="edit-article-wrapper">
      <div className="edit-article-header">
        <div className="edit-title-wrapper">
          <h2>{item.category}</h2>
          <h2>{item.title}</h2>
          <h2>{item.link}</h2>
        </div>
      </div>
      
      <button
        className="md-button"
        onClick={() => props.history.push(`/edit-article/${item.id}`)}
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
