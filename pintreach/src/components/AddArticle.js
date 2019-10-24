import React, { useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import Community from './Community';
import LoginPage from './LoginPage';
import MyBoard from './MyBoard';

const StyledAddArticle = styled.div`
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
            margin-top:25vh;
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
    margin-top: 25vh;
    display:flex;
    justify-content: space-evenly;
    flex-wrap:wrap;
    background-color:rgba(58, 68, 84, 1);
    width:90%;
    height:50vh;
    margin-left:80px;
    div{
        margin-top: 10vh;
        padding:2%;
        width:100%;
        background-color: rgba(58, 68, 84, 1);
        margin-bottom:50px;
        h1{
         
           color: rgba(245, 221, 221, 1);
        
        }
        
      
    }
    label{
        color:rgba(245, 221, 221, 1);
        font-size: 2rem;
        width:100%;
    }
    
    input[type="text"] {
        width:30%;
        display: flex;
    margin-left:auto;
    margin-right:auto;
       
        background-color: rgba(194, 178, 180, .7);
      }
      .select{
          width:300px;
          font-size: 1.2rem;
      }
      input[type="url"] {
        width:30%;
        display: flex;
    margin-left:auto;
    margin-right:auto;
       
        background-color: rgba(194, 178, 180, .7);
      }
      button{
          background-color: rgba(194, 178, 180, .7);
        color:rgba(245, 221, 221, 1);
        font-size: 1.0rem;
        margin:20px;
      }
}
`;



const AddArticle = props => {
    const { addNewArticle, initialCard } = props;
    const [article, setArticle] = useState(initialCard || {
        userId: "",
        id: "",
        body: "",
        title: "",


    });


    const changeHandler = event => {
        setArticle({ ...article, [event.target.name]: event.target.value });
        console.log(event.target.value);

    }
    const submitForm = event => {
        event.preventDefault();
        // axios
        // .post(`https://jsonplaceholder.typicode.com/posts}`)
        // console.log('is posting')
        // .then(res => {
        //     props.history.push('myboard', res.data)
        // })
        // .catch(err => console.log("it did not work", err.response));
        console.log('submit is working');
        props.addNewArticle(article);
        setArticle({
            userId: "",
            id: "",
            body: "",
            title: "",
        });
    };

    return (

        <div className="add-article">
            <header>
                <StyledAddArticle>
                    <div className="outer">
                        <div>
                            <h1>Add an Article</h1>
                        </div>
                        <nav>
                            <Link to="/myboard">MyBoard</Link>
                            <Link to="/community">Community</Link>
                            <Link to="/login">Log Out</Link>

                            <Route path="/my-board" component={MyBoard} />
                            <Route path="/community" component={Community} />
                            <Route path="/log-in" component={LoginPage} />
                        </nav>
                    </div>
                </StyledAddArticle>
            </header>
            <StyledMain>
                <main>
                    <div>
                        <form onSubmit={submitForm}>
                            <label htmlFor="author">Author:</label>
                            <input id="Date.now()" type="text" placeholder="Author" name="author" onChange={changeHandler} value={props.author} />

                            <label htmlFor="title">Title:</label>
                            <input id="Date.now()" type="text" placeholder="Title" name="title" onChange={changeHandler} value={props.title} />
                            <label>Category:<br></br>
                                <select value={props.value} name="category" onChange={changeHandler} className="select">
                                    <option>Please Choose Category</option>
                                    <option value="biology">Biology</option>
                                    <option value="psychology">Psychology</option>
                                    <option value="Technology">Technology</option>
                                    <option value="physics">Physics</option>
                                    <option value="Health">Health</option>
                                </select>
                            </label><br></br>


                            <label htmlFor="Link">Link:</label>
                            <input id="Date.now()" type="url" name="url" placeholder="https://abc.com" onChange={changeHandler} value={props.link} />
                            <button type="submit">Add Article</button>

                        </form>
                    </div>
                </main>
            </StyledMain>




        </div>


    );
};
export default AddArticle;