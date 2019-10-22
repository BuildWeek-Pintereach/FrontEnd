import React, { useState } from "react";
import AddArticle from './AddArticle';
import { Link, Route } from 'react-router-dom';
// import Community from './Community';
import LoginPage from './LoginPage';


//this page needs:
//The code in ddArticle is going in here--and the form + action is staying in AddArticle
// --A "Welcome" message--Ideally one that says welcome {username} (ideal but not required)

// --Add 'Edit Article' and 'Delete Article' Buttons on MyBoard
// --Link to Community page (do we need edit and delete buttons here???)

function MyBoard(props) {

    const [articles, setArticles] = useState([{
        author: 'James Stevens', title: 'My Research Paper', category: 'Business', url: 'https://abc.com'
    }, { author: 'Jessica Parker', title: 'The HealthInsider', category: 'Health', url: 'https://abc.com' },
    { author: 'Sammy Williams', title: 'The Psychologist and ME', category: 'Health', url: 'https://abc.com' }
    ])
    const addNewArticle = article => {
        setArticles([...articles, article])
        console.log(article)

    }

    console.log(articles)
    return (

        <div className="App">
            <header>
                {/* <Logo>Pintreach</Logo> */}
                <Link to="/my-board">My Board</Link>
                {/* <Link to="/community">Community</Link> */}
                <Link to="/log-in">Log Out</Link>
                <Route path="/my-board" component={MyBoard} />
                {/* <Route path="/community" component={Community} /> */}
                <Route path="/log-in" component={LoginPage} />
            </header>
            <main>
                {articles.map(article => {
                    return (
                        <div key={article.author}>
                            <h1>author:{article.author}</h1>
                            <p>title:{article.title}</p>
                            <p>category:{article.category}</p>
                            <p>url:{article.url}</p>
                        </div>

                    )
                })}
            </main>
            <button>Add New Article</button>
        </div>
    );


}

export default MyBoard;
