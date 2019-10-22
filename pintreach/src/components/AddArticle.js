import React, { useState } from 'react';


const AddArticle = () => {
    const [articles, setArticles] = useState({
        name: "",
        email: "",
        link: ""
    });
    const addNewArticle = article => {
        setArticles({ articles: [...articles, article] });
    };
    const changeHandler = event => {
        setArticles({ ...articles, [event.target.name]: event.target.value });
        console.log(event.target.name);

    }
    const submitForm = event => {
        event.preventDefault();
        addNewArticle(articles);
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <h1>Add an Article</h1>
                <label htmlFor="Name">Name</label>
                <input type="text" placeholder="name" onChange={changeHandler} />

                <label htmlFor="Email">Email</label>
                <input type="email" placeholder="email" onChange={changeHandler} />
                <label htmlFor="category">Category</label>
                <input type="select" className="category-select" name="category" placeholder="Category" />
                <option>Please Choose Category</option>
                <option value="biology">Biology</option>
                <option value="psychology">Psychology</option>
                <option value="Technology">Technology></option>
                <option value="physics">Physics</option>
                <option value="Health">Health</option> />

                <label htmlFor="Link">Link/Url</label>
                <input type="url" name="article" placeholder="https://abc.com" onChange={changeHandler} />
                <button type="submit">Add Article</button>
            </form>



            {articles.map(article => (
                <ul key={article.id}>
                    <li>title:{article.name}</li>
                    <li>author:{article.email}</li>
                    <li>link:{article.link}</li>
                    <li>description:{article.description}</li>
                </ul>
            ))}
        </>
    );
};
export default AddArticle;