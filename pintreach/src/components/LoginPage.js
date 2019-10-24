import React, { useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from '../utils/axiosWithAuth';


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
    email: '',
    password: ''
  });

  const handleChanges = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    }
    )
    // console.log('handlechange login is firing')
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/login', login)
    // console.log('login is firing')
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
    })
        .catch(err => console.log('login error', err.response));
  }



  return (
    <StyledLogin>
      <form className="login-page" onSubmit={onSubmit}>
        <label htmlFor="email">Email Address: </label>
          <input type="text" name='password' placeholder="example@email.com..." email={login.email} onChange={handleChanges} required />
          <label htmlFor="email">Password: </label>
          <input type="text" name='password' placeholder="Password..." password={login.password} onChange={handleChanges} required />


        <button type="submit">Login</button>
        <p>
          Need to sign up? <br />
          <a href='/signup'>Sign Up Now!</a>
        </p>
      </form>
    </StyledLogin>
  );
};



export default LoginPage;
