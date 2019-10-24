<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
// import React, { useState } from "react";
>>>>>>> 56eb4e4a5177876f11133c68222c64315556c488
import { Link, Route } from 'react-router-dom';
import Community from './Community';
import LoginPage from './LoginPage';
import styled from 'styled-components';
import AddArticle from "./AddArticle";
import React from 'react';

import { axiosWithAuth } from "../utils/axiosWithAuth";

const StyledMyBoard = styled.div`
.outer{
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 2%;
    background-color: rgba(58, 68, 84, .9);

    border-bottom-left-radius:15%;
    border-bottom-right-radius:15%;
    border-bottom: 3px solid rgba(107, 78, 113, 1);
    top: 0%;
    max-height: 19vh;
    @media(max-width: 500px){font-size: 0.5rem; display:flex; flex-direction: column;}
    @media(max-width: 820px){font-size: 1rem;}
    };
    
    
    div{
        width:49%;
        text-align: center;
       
        h1{
            color:rgba(245, 221, 221, 1);
            font-size: 3rem;
            margin-bottom:5px;
            @media(max-width: 500px){font-size: 0.5rem; display: flex; flex-direction:column;}
            @media(max-width: 820px){font-size: 1rem;}
        }
        h2{
            color:rgba(245, 221, 221, 1);
            margin-bottom:60px;
            line-height:1;
            font-size: 1.6rem;
            @media(max-width: 500px){font-size: 0.5rem; display: flex; flex-direction: column;}
            @media(max-width:820px){font-size: 1rem;}
        }
        
    
    }
    
    nav{
        display: flex;
        justify-content: space-around;
        align-items: center;        
        width:49%; 
    
       a{
            width:20%;
            padding: 2%;
            text-decoration: none;
            color: rgba(194, 178, 180, .7);
            font-size: 1.5rem;
            text-align: center;
            border-bottom: 3px solid rgba(107, 78, 113, 1);
            border-radius: 15%;
            &:hover{
                color: rgba(245, 221, 221, 1);
            }
            @media(max-width: 500px){font-size: 0.5rem; display:flex; flex-direction:column;}
            @media(max-width:825px){font-size: 1rem;}
        } 
        } 
}
`;
const StyledMain = styled.div`
main{
    margin-top: 26vh;
    display:flex;
    justify-content: space-around;
    flex-wrap:wrap;
    div{
        padding:2%;
        width:28%;
        background-color: rgba(58, 68, 84, 1);
        margin:10px;
        h1{
         
           color: rgba(245, 221, 221, 1);
           font-size:1rem;
        
        }
        @media(max-width: 500px){font-size: 0.5rem; display: flex; flex-direction:column;}
            @media(max-width: 820px){font-size: 1rem;}

        p{
            color: rgba(245, 221, 221, 1);  
        }
        @media(max-width: 500px){font-size: 0.5rem; display: flex; flex-direction:column;}
            @media(max-width: 820px){font-size: 1rem;}

    }
    
}
`;


<<<<<<< HEAD
const MyBoard = props => {
    console.log(props);

    const [article, setArticle] = useState({});
    //     id: '1', title: 'My Research Paper', type: 'Business', url: 'https://abc.com'
    // }, { id: '2', title: 'The HealthInsider', type: 'Health', url: 'https://abc.com' },
    // { id: '3', title: 'The Psychologist and ME', type: 'Health', url: 'https://abc.com' }
    // ])
    useEffect(() => {
        const id = props.match.params.id;
        // axiosWithAuth()
        //  .get('/articles')
        //.get(`https://bw-backend.herokuapp.com/users/articles`)
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/`)
            //.get(`https://pintereach-be.herokuapp.com/${id}articles`)
            .then(response => {
                console.log("response", response);
                setArticle(response.data)

            }, [])
            .catch(error => {
                console.error("Server Error", error);

            }, [])
    })
    const addNewArticle = article => {

        setArticle([...article, article])

        console.log(articles)
    }
    if (!article) {
        return <div>Loading articles information...</div>;

    }
    // console.log(articles)
    //const { category_ids, title, link } = props.articles;
    return (

        <div className="my-board" >
=======
function MyBoard(props) {
    function routeToBoard(ev, article) {
        ev.preventDefault();
        props.history.push(`/myboard/${article.id}`);
    }
    
    return (
        <div className="my-board">
>>>>>>> 56eb4e4a5177876f11133c68222c64315556c488

            <header>
                <StyledMyBoard>
                    <div className="outer">
                        {/* <Logo>Pintreach</Logo> */}
                        <div>
                            <h1>Pintereach</h1>
                            <h2>Your References Consolidated</h2>
                        </div>
                        <nav>

                            <Link to="/add-article">Add Article</Link>
                            <Link to="/community">Community</Link>
                            <Link to="/login">Log Out</Link>
<<<<<<< HEAD
                            {/* <AddArticle addNewArticle={addNewArticle} /> */}
                            <Route exact path="/add-article" render={props => <AddArticle {...props} articles={articles} addNewArticle={addNewArticle} />} />
                            <Route path="/community" component={Community} />
                            <Route path="/log-in" component={LoginPage} />
                            <Route path="/add-article" render={props => <AddArticle {...props} articles={articles} addNewArticle={addNewArticle} />} />
=======

>>>>>>> 56eb4e4a5177876f11133c68222c64315556c488
                        </nav>
                    </div>
                </StyledMyBoard>
            </header>
            <StyledMain>
                <main>
<<<<<<< HEAD
                    console.log(articles)
                    {articles && articles.map(article => {
                        return (
                            <div key={article.category_ids} className="article-id">
                                <h1>Title:{article.title}</h1>
                                {/* <MyBoardList users={yBoardList} /> */}
                                <p className="article-link">
                                    Desc: <strong>{article.link}</strong>
                                </p>
=======
                    {props.articles.map(article => {
                        return (
                            <div onClick={ev => routeToBoard(ev, article)}
                                className='myboard-card' 
                                key={article.id}>
                                    <p>{article.title}</p>
                                    <p>{article.url}</p>
                                    <p>{article.type}</p>
>>>>>>> 56eb4e4a5177876f11133c68222c64315556c488
                            </div>
                        )
                    })}
                </main>
                {/* <button onClick={addNewArticle} className="add-button">Add Article </button> */}
            </StyledMain>
<<<<<<< HEAD

        </div >
=======
           
        </div>
>>>>>>> 56eb4e4a5177876f11133c68222c64315556c488
    );


}

export default MyBoard;
