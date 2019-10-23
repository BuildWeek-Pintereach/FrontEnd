import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const AddArticle = props => {
    const [article, setArticle] = useState({
        title: "",
        url: "",
        type:''
    });


    const changeHandler = e => {
        setArticle({ ...article, [e.target.name]: e.target.value });
        // console.log(event.target.value);

    }
    const submitForm = e => {
        e.preventDefault();
        axiosWithAuth()
        .post(`/ck21z8u7t00001xdulbmu8dfs/article`, article)
        // console.log('is posting')
        .then(res => {
            props.history.push('myboard', res.data)
        })
        .catch(err => console.log("it did not work", err.response));  
    };

    return (
        <div>
            <h1>Add an Article</h1>
            <form onSubmit={submitForm}>
                
                {/* <label htmlFor="author">Author</label>
                <input id="Date.now()" type="text" placeholder="Author" name="author" onChange={changeHandler} value={props.author} /> */}

                <label htmlFor="title">Title</label>
                <input id='Date.now()' type="text" placeholder="Title" name="title" onChange={changeHandler} value={props.title} />
                <label>Category:
                <select value={props.value} name="type" onChange={changeHandler}>
                        <option>Please Choose Category</option>
                        <option value="biology">Biology</option>
                        <option value="psychology">Psychology</option>
                        <option value="Technology">Technology</option>
                        <option value="physics">Physics</option>
                        <option value="Health">Health</option>
                    </select>
                </label>


                <label htmlFor="Link">URL: </label>
                <input id="Date.now()" type="url" name="url" placeholder="https://abc.com" onChange={changeHandler} value={props.link} />
                <button type="submit">Add Article</button>
            </form>




        </div>
    );
};
export default AddArticle;