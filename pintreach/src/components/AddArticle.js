import React, { useState, useEffect } from 'react';
import axios from 'axios';
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



const AddArticle = ({ props, addArticle, initialCard }) => {

    const [article, setArticle] = useState(initialCard || {


        id: Date.now(),
        body: "",
        title: "",


    });

    // useEffect(() => {
    //   axios

    //     .post(`https://reqres.in/api/users/, values`)
    //
    //  .then(response => {
    //     console.log('is posting')
    //     props.history.push('my-board', response.data)
    // }, [])
    //   .catch(err => console.log("it did not work", err.response));
    //console.log('submit is working');
    // }, [])




    const handleChange = event => {
        setArticle({ ...article, [event.target.name]: event.target.value });
        // console.log(event.target.value);

    }
    const handleSubmit = event => {
        event.preventDefault();
        props.addArticle(article);
        // setArticle({

        //     id: Date.now(),
        //     body: "",
        //     title: "",
        // });
    };
    //axios
    //.post(`https://jsonplaceholder.typ`)
    // .post(`https://reqres.in/api/users/, values`)

    // .then(response => {
    //console.log('is posting')
    // props.history.push('my-board', response.data)
    // })
    // .catch(err => console.log("it did not work", err.response));
    //console.log('submit is working');



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
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="title">Title:</label>
                            <input id="Date.now()" type="text" placeholder="Title" name="title" onChange={handleChange} value={article.title} />

                            <label htmlFor="desc">Desc:</label>
                            <input id="Date.now()" type="text" placeholder="Desc" name="body" onChange={handleChange} value={article.body} />
                            <button type="submit">Add Article</button>
                            {/* <label>Type:<br></br>
                                <select value={props.value} name="category" onChange={changeHandler} className="select">
                                    <option>Please Choose Category</option>
                                    <option value="biology">Biology</option>
                                    <option value="psychology">Psychology</option>
                                    <option value="Technology">Technology</option>
                                    <option value="physics">Physics</option>
                                    <option value="Health">Health</option> */}
                            {/* </select>
                            </label><br></br> */}


                            {/* <label htmlFor="Url">Url:</label>
                            <input id="Date.now()" type="url" name="url" placeholder="https://abc.com" onChange={changeHandler} value={props.link} */}

                        </form>
                    </div>
                </main>
            </StyledMain>




        </div>


    );
};
export default AddArticle;