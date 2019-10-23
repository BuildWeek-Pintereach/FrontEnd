import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';


const AddArticle = props => {
    const [article, setArticle] = useState({
        author: "",
        title: "",
        category: "",
        url: ""

    });


    const changeHandler = event => {
        setArticle({ ...article, [event.target.name]: event.target.value });
        console.log(event.target.value);

    }
    const submitForm = event => {
        event.preventDefault();
        props.addNewArticle(article);
        setArticle({ author: "", title: "", category: "", url: "" });
    };

    return (
        <>
            <form onSubmit={submitForm}>
                <h1>Add an Article</h1>
                <label htmlFor="author">Author</label>
                <input id="Date.now()" type="text" placeholder="Author" name="author" onChange={changeHandler} value={props.author} />

                <label htmlFor="title">Title</label>
                <input id="Date.now()" type="text" placeholder="Title" name="title" onChange={changeHandler} value={props.title} />
                <label>Category:
                <select value={props.value} name="category" onChange={changeHandler}>
                        <option>Please Choose Category</option>
                        <option value="biology">Biology</option>
                        <option value="psychology">Psychology</option>
                        <option value="Technology">Technology</option>
                        <option value="physics">Physics</option>
                        <option value="Health">Health</option>
                    </select>
                </label>


                <label htmlFor="Link">Link:</label>
                <input id="Date.now()" type="url" name="url" placeholder="https://abc.com" onChange={changeHandler} value={props.link} />
                <button type="submit">Add Article</button>
            </form>




        </>
    );
};
export default AddArticle;