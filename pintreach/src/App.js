// import React from 'react';

// import './App.css';
// import AddArticle from './components/AddArticle';
// // import MyBoard from './components/MyBoard';
// import Community from './components/Community';
// import { Route, Link } from 'react-router-dom';
// import data from "./data";
// import LoginPage from './components/LoginPage';
// import SignUpPage from './components/SignUpPage';

// function App() {


//   return (

//     <div className="App">
//       {/* <Community /> */}
//       {/* <MyBoard /> */}
//       {/* <AddArticle /> */}
//       <SignUpPage />
//       <LoginPage />
//       {/* <Community /> */}
//       {/* <header className="App-header">
//       </header> */}
//       {/* <Link to="/community">Community</Link> */}
//       {/* <Route path="/add-article" component={AddArticle} /> */}
//       {/* <Route exact path="/myboard" component={MyBoard} /> */}
//       {/* <Route path='/community' component={Community}/> */}
//     </div>
//   );
// }

// export default App;

// ------ ALL TEST CODE UNDER HERE UNTIL END OF WED

//SBH NOTES -- DO NOT DELETE

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import "./App.css";
import SignUpPage from "./components/SignUpPage";
import MyBoard from "./components/MyBoard";
import LoginPage from "./components/LoginPage";
import data from "./data";
import Community from "./components/Community";

import AddArticle from "./components/AddArticle";

function App() {
  return (
     <div className="App">
       <Router>
        <Switch>
          <Route exact path="/" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/myboard" component={MyBoard} /> 
          {/* <Route exact path="/edit-article" component={EditMyBoard} /> */}
          <Route path="/add-article" component={AddArticle} />   
          <Route exact path="/community" component={Community} />
       </Switch>
      </Router>
    </div>

  );
}

export default App;


