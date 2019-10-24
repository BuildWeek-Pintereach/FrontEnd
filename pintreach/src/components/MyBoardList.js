// import { axiosWithAuth } from "../utils/axiosWithAuth";
// import React, { useState, useEffect } from 'react';
// const [editing, setEditing] = useState(false);
// const [boardToEdit, setBoardToEdit] = useState(initialBoard);
// const { match, articles } = props;
// useEffect(() => {
//     getArticles();
// }, [])
// const getArticles = () => {
//     const id = props.match.params.id
// }
// const updateArticles = articles.find(MyBoard => `${articles.category_ids}` === props.articles.categories_ids
// );
// if (updateArticles) {
//     console.log(updateArticles);
//     setEditing(updateArticles);

// }, [props, articles]);
// const changeHandler = event => {
//     event.persist();
//     let value = event.target.name === 'articles') {
//         value = (value);
// }
// setBoardToEdit({
//     ...articles,
//     [event.target.name]: value
// });
// const editBoard = article => {
//     setEditing(true);
//     setBoardToEdit(article);

//     const saveEdit = event => {
//         event.preventDefault();
//         axios
//             .put(`${articles.category_ids}`, articles)
//             .then(response => {
//                 props.boardToEdit(response.data);
//                 props.history.push(`/board-list/${articles.category_ids}`);
//                 console.log(response)
//                 setBoardToEdit(initialBoard);
//             })
//             .catch(err => console.log(err.response));
//     };
//     const deleteBoard = event => {
//         const id = this.props.match.params.id
//         event.preventDefault();
//         axios
//             .delete('articles/${id}')
//             .then(res => {
//                 this.props.boardToEdit(response.data);
//                 props.history.push('/board-list');
//             })
//             .catch(err => console.log(err.response));
//     }
//     return (
//         <div className="board-wrap">
//             <p>board</p>
//             <ul>

//                 props.articles && articles.map(article => (
//                       <li key={articles.category_ids} onClick={() => editBoard(articles)}>
//                     <span>
//                         <span className="delete" onClick={() => deleteColor(articles)}>
//                             x
//                           </span>{" Delete"}
//                         {articles.article}
//                     </span>

//                     <div className="board-box" styles={`{ backgroundColor: ${articles.article} }`}
//                     />Edit
//                     </li>
//                 )},}
//                   </ul>
//             {
//                 editing && (
//                     <form onSubmit={saveEdit}>
//                         <legend>edit Board</legend>
//                         <label>
//                             title:
//                         <input
//                                 onChange={event =>
//                                     setBoardToEdit({ ...boardToEdit, article: event.target.value })
//                                 }
//                                 value={boardToEdit.title}
//                             />
//                         </label>
//                         <label>
//                             Link
//                         <input
//                                 onChange={e =>
//                                     setBoardToEdit({
//                                         ...boardToEdit,
//                                         link: { link: e.target.value }
//                                     })
//                                 }
//                                 value={boardToEdit.link}
//                             />
//                         </label>
//                         <div className="button-row">
//                             <button type="submit">save</button>
//                             <button onClick={() => setEditing(false)}>cancel</button>
//                         </div>
//                     </form>
//                 )
//             }
//             <div className="spacer" />
//             {/* stretch - build another form here to add a color */}
//         </div >
//     );
// }

// export default MyBoardList;


