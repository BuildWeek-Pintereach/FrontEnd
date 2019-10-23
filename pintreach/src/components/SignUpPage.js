import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';


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
  // console.log(props);
    const [signup, setSignup] = useState({
        firstname: '',
        lastname:'',
        email: '',
        password: ''
    });

    const handleChanges = e => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
            }
        )
        // console.log('handlechange is firing')
    };

    const onSubmit = e => {
        e.preventDefault();
        axios
        .post( 'https://pintereach-be.herokuapp.com/register', signup)
          // console.log('onsubmit is firing')
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/login');
        })
            .catch(err => console.log('Signup error -- try again.', err.response));
    }

    

  return (
    <StyledSignUp>
      <form className="sign-up-form" onSubmit={onSubmit}>
        <label htmlFor="first-name">First Name: </label>
        <input type="text" name='firstname' placeholder="John..." firstname={signup.firstname} onChange={handleChanges} required/>
        <br />
        <label htmlFor="last-name">Last Name: </label>
        <input type="text" name='lastname' placeholder="Doe..." lastname={signup.lastname} onChange={handleChanges} required/>
        <br />
        <label htmlFor="email">Email Address: </label>
        <input type="text" name='email' placeholder="Email Address..." email={signup.email} onChange={handleChanges} required/>
        <br />
        <label htmlFor="password">Password: </label>
        <input type="text" name='password' placeholder="Password..." password={signup.password} onChange={handleChanges} required/>
        <br />

        <button type="submit">Sign Up</button>
        <p>
          Aleady have an account? <br />
          <Link to='/login'>Log in here</Link>{" "}
        </p>
      </form>
    </StyledSignUp>
  );
};

export default SignUpPage;
