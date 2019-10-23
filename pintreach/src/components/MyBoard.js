import React, { useState } from "react";
import { Link, Route } from 'react-router-dom';
import Community from './Community';
import LoginPage from './LoginPage';
import styled from 'styled-components';

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
    };
    
    
    div{
        width:49%;
        text-align: center;
        h1{
            color:rgba(245, 221, 221, 1);
            font-size: 3rem;
        }
        h2{
            color:rgba(245, 221, 221, 1);
            font-size: 2rem;
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

    const [articles, setArticles] = useState([{
        author: 'James Stevens', title: 'My Research Paper', category: 'Business', url: 'https://abc.com'
    }, { author: 'Jessica Parker', title: 'The HealthInsider', category: 'Health', url: 'https://abc.com' },
    { author: 'Sammy Williams', title: 'The Psychologist and ME', category: 'Health', url: 'https://abc.com' }
    ])

    const addNewArticle = article => {
        setArticles([...articles, article])
        console.log(article)

    }

    console.log(articles, addNewArticle)
    return (

        <div className="myboard">

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

                            <Route path="/my-board" component={MyBoard} />
                            <Route path="/community" component={Community} />
                            <Route path="/log-in" component={LoginPage} />
                        </nav>
                    </div>
                </StyledMyBoard>
            </header>
            <StyledMain>
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
          </StyledMain>
            {/* <button>Edit Article </button> */}
        </div>
    );


}

export default MyBoard;
