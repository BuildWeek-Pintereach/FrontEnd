import React from 'react';

import './App.css';
import AddArticle from './components/AddArticle';
import MyBoard from './components/MyBoard';
import Community from './components/Community';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

// const StyledApp = styled.div`
// .outer{
//     position: fixed;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     width: 100%;
//     padding: 2%;
//     background-color: rgba(58, 68, 84, .9);

//     border-bottom-left-radius:15%;
//     border-bottom-right-radius:15%;
//     border-bottom: 3px solid rgba(107, 78, 113, 1);
//     top: 0%;
//     max-height: 19vh;
//     @media  (max-width: 375px){font-size: 2rem; display:flex; flex-direction: column;}
//     @media (max-width: 768px){font-size: 2rem;}
//     };


//     div{
//         width:49%;
//         text-align: center;

//         h1{
//             color:rgba(245, 221, 221, 1);
//             font-size: 3rem;
//             @media  (max-width: 375px){font-size: 1rem; display: flex; flex-direction:column;}
//             @media (max-width: 768px){font-size: 2rem;}
//         }
//         h2{
//             color:rgba(245, 221, 221, 1);
//             font-size: 2rem;
//             @media (max-width: 500px){font-size: 2rem; display: flex; flex-direction: column;}
//             @media  (max-width:825px){font-size: 3rem;}
//         }


//     }

//     nav{
//         display: flex;
//         justify-content: space-around;
//         align-items: center;        
//         width:49%; 

//        a{
//             width:20%;
//             padding: 2%;
//             text-decoration: none;
//             color: rgba(194, 178, 180, .7);
//             font-size: 1.5rem;
//             text-align: center;
//             border-bottom: 3px solid rgba(107, 78, 113, 1);
//             border-radius: 15%;
//             &:hover{
//                 color: rgba(245, 221, 221, 1);
//             }
//             @media (max-width: 500px){font-size: 1rem; display:flex; flex-direction:column;}
//             @media  (max-width:825px){font-size: 2rem;}
//         } 
//         } 
// }
// `;

function App() {
  return (
    //<StyledApp>
    <div className="App">

      <Link to="/my-board">My Board</Link>
      <Route path="/add-article" component={AddArticle} />
      <Route exact path="/my-board" component={MyBoard} />
      <Route path='/community' component={Community} />
    </div>
    // </StyledApp>
  );
}

export default App;

// ------ ALL TEST CODE UNDER HERE UNTIL END OF WED

//SBH NOTES -- DO NOT DELETE

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import PrivateRoute from './utils/PrivateRoute';
// import "./App.css";
// import SignUpPage from "./components/SignUpPage";
// import MyBoard from "./components/MyBoard";
// import LoginPage from "./components/LoginPage";
// import data from "./data";
// import Community from "./components/Community";
// import EditArticle from "./components/EditArticle";
// import AddArticle from "./components/AddArticle";

// function App() {
//   return (
//      <div className="App">
//        <Router>
//         <Switch>
//           <Route exact path="/" component={SignUpPage} />
//           <Route path="/log-in" component={LoginPage} />
//           <PrivateRoute path="/myboard" component={MyBoard} /> 
//           <Route exact path="/edit-article" component={EditArticle} />
//           <Route path="/add-article" component={AddArticle} />
//            
//           <Route exact path="/community" component={Community} />
//        </Switch>
//       </Router> */}
//     </div>

//   );
// }

// export default App;


