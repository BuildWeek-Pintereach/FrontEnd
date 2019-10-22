import React, { useState } from "react";
import styled from "styled-components";
// import { axiosWithAuth } from '../utils/axiosWithAuth';


const StyledSignUp = styled.div`

.sign-up-form {
    font-color: #fff;
    padding: 100px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    }

    .input {
        margin-top:20px;
    }

    button {
        padding:10px;
        border-radius:10px
        background-color:darkgray;
    }

`;

const SignUpPage = props => {
  console.log(props);
    const [signup, setSignup] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChanges = e => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
            }
        )
    };

    const onSubmit = e => {
        e.preventDefault();
        // axiosWithAuth()
        // .post('', signup)
        // .then(res => {
        //     localStorage.setItem('token', res.data.payload);
        //     props.history.push('/login');
        // })
        //     .catch(err => console.log('login error', err.response));
    }

    

  return (
    <StyledSignUp>
      <form className="sign-up-form" onSubmit={onSubmit}>
        <label htmlFor="username">Create a Username: </label>
        <input type="text" placeholder="Username..." value={signup.username} onChange={handleChanges} required/>
        <br />
        <label htmlFor="email">Email Address: </label>
        <input type="text" placeholder="Email Address..." value={signup.email} onChange={handleChanges} required/>
        <br />
        <label htmlFor="password">Password: </label>
        <input type="text" placeholder="Password..." value={signup.password} onChange={handleChanges} required/>
        <br />

        <button type="submit">Sign Up</button>
        <p>
          Aleady have an account? <br />
          <a href='/login'>Log in here</a>
        </p>
      </form>
    </StyledSignUp>
  );
};

export default SignUpPage;
