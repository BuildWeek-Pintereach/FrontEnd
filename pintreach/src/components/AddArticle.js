import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


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
            line-height:0.5;
            font-size: 3rem;
   
        }
        h2{
            color:rgba(245, 221, 221, 1);
            line-height:0.5;
            font-size: 1.8rem;
            margin-bottom:5vh;
        }
        @media(max-width: 500px){font-size: 0.5rem; display: flex; flex-direction:column;}
            @media(max-width: 820px){font-size: 1rem;}

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
            @media(max-width: 500px){font-size: 0.5rem; display: flex; flex-direction:column;}
            @media(max-width: 820px){font-size: 1rem;}

        } 
}
`;
const StyledMain = styled.div`
main{
    margin-top: 30vh;
    display:flex;
    justify-content: space-evenly;
    flex-wrap:wrap;
    background-color:rgba(58, 68, 84, 1);
    width:90%;
    height:50vh;
    margin-left:60px;
    @media(max-width: 500px){font-size: 0.5rem; display: flex; flex-direction:column;}
    @media(max-width: 820px){font-size: 1rem;}

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
      @media(max-width: 500px){font-size: 0.5rem; display: flex; flex-direction:column;}
            @media(max-width: 820px){font-size: 1rem;}

}
`;



const AddArticle = ({ props, addArticle, initialCard }) => {

    const [article, setArticle] = useState(initialCard || {
        title: "",
        link: "",
        category_ids: ''
    });

    useEffect(() => {
      axios

        .post(`https://reqres.in/api/users/, values`)
    
     .then(response => {
        console.log('is posting')
        props.history.push('my    board', response.data)
    }, [])
      .catch(err => console.log("it did not work", err.response));
    console.log('submit is working');
    }, [])




    const handleChange = event => {
        setArticle({ ...article, [event.target.name]: event.target.value });
        // console.log(event.target.value);

    }
    const submitForm = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(`/users/articles`, article)
            // console.log('is posting')
            .then(res => {
                props.history.push('/myboard', res.data)
            })
            .catch(err => console.log("it did not work", err.response));
        console.log('submit is working');
        //addNewArticle(article);
        setArticle({ title: "", category: "", url: "" });
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
                            <h1>Pintereach</h1>
                            <h1>Add an Article</h1>
                        </div>
                        <nav>
                            <a href='#'>Home</a>
                            <Link to="/myboard">MyBoard</Link>
                            <Link to="/community">Community</Link>
                            <Link to="/login">Log Out</Link>

                        </nav>
                    </div>
                </StyledAddArticle>
            </header>
            <StyledMain>
                <main>
                    <div>
                        <form onSubmit={submitForm}>
                            <label htmlFor="title">Title:</label>
                            <input id="Date.now()" type="text" placeholder="Title" name="title" onChange={handleChange} value={article.title} />

                            <label htmlFor="desc">Desc:</label>
                            <input id="Date.now()" type="text" placeholder="Desc" name="body" onChange={handleChange} value={article.body} />
                            <button onClick={addArticle} className="add-button">Add Article </button>

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