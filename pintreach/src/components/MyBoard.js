// import React, { useState } from "react";
import { Link, Route } from 'react-router-dom';
import Community from './Community';
import LoginPage from './LoginPage';
import styled from 'styled-components';
import AddArticle from "./AddArticle";
import React from 'react';

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
    @media  (max-width: 375px){font-size: 2rem; display:flex; flex-direction: column;}
    @media (max-width: 768px){font-size: 2rem;}
    };
    
    
    div{
        width:49%;
        text-align: center;
        h1{
            color:rgba(245, 221, 221, 1);
            font-size: 3rem;
            @media  (max-width: 375px){font-size: 1rem; display: flex; flex-direction:column;}
            @media (max-width: 768px){font-size: 2rem;}
        }
        h2{
            color:rgba(245, 221, 221, 1);
            font-size: 2rem;
            @media (max-width: 375px){font-size: 2rem; display: flex; flex-direction: column;}
            @media  (max-width:768px){font-size: 3rem;}
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
            @media (max-width: 375px){font-size: 1rem; display:flex; flex-direction:column;}
            @media  (max-width:768px){font-size: 2rem;}
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
        h1{
         
           color: rgba(245, 221, 221, 1);
        
        }
        p{
            color: rgba(245, 221, 221, 1);  
        }
    }
}
`;


function MyBoard(props) {
    function routeToBoard(ev, article) {
        ev.preventDefault();
        props.history.push(`/myboard/${article.id}`);
    }
    
    return (
        <div className="my-board">

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
                            <a href="/community">Community</a>
                            <Link to="/login">Log Out</Link>

                            <Route exact path="/add-article" render={props => <AddArticle {...props} addNewArticle={props.addNewArticle} />} />
                            <Route path="/community" component={Community} />
                            <Route path="/log-in" component={LoginPage} />

                        </nav>
                    </div>
                </StyledMyBoard>
            </header>
            <StyledMain>
                <main>
                    {props.articles.map(article => {
                        return (
                            <div onClick={ev => routeToBoard(ev, article)}
                                className='myboard-card' 
                                key={article.id}>
                                    <p>{article.title}</p>
                                    <p>{article.url}</p>
                                    <p>{article.type}</p>
                            </div>
                        )
                    })}
                </main>
            </StyledMain>
           
        </div>
    );


}

export default MyBoard;
