import React, { useState } from "react";
import styled from "styled-components";
// import { axiosWithAuth } from '../utils/axiosWithAuth';
// import PrivateRoute from '../utils/PrivateRoute';


const StyledLogin = styled.div` 

.login-page
    font-color: #fff;
    padding: 100px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    }

    input {
        margin-left:10px;
        margin-bottom:10px;
    }
    
    button {
        padding:10px;
        border-radius:10px
        background-color:darkgray;
    }

`;
const LoginPage = props => {
    console.log(props);
    const [login, setLogin] = useState({
        username: '',
        password: ''
    });
    
    const handleChanges = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
            }
        )
    };
    
    const onSubmit = e => {
        e.preventDefault();
        // axiosWithAuth()
        // .post('api/login', login)
        // .then(res => {
        //     localStorage.setItem('token', res.data.payload);
        //     props.history.push('/protected');
        // })
        //     .catch(err => console.log('login error', err.response));
    }
    
    

  return (
    <StyledLogin>
      <form className="login-page" onSubmit={onSubmit}>
        <label htmlFor="username">Enter Username</label>
        <input type="text" placeholder="JohnDoe123..." value={login.username} onChange={handleChanges} required/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="Password..." value={login.password} onChange={handleChanges} required/>
        <br />

        <button type="submit">Sign Up</button>
        <p>
          Aleady have an account? <br />
          <a href='/login'>Log in here</a>
        </p>
      </form>
    </StyledLogin>
  );
};



export default LoginPage;