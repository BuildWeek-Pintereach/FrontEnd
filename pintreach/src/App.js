import React from "react";
import { Community } from "./components/Community.js";
import "./App.css";
import AddArticle from "./components/AddArticle";

function App() {
  return (
    <div className="App">
      <Community />
      {/* <header className="App-header">

      </header>
      <AddArticle /> */}
    </div>
  );
}

export default App;

// ------ ALL TEST CODE UNDER HERE UNTIL END OF WED

//SBH NOTES -- DO NOT DELETE

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
// import SignUpPage from './components/SignUpPage';
// import LoginPage from './components/LoginPage';
// import SignUpPage from './components/SignUpPage';
// import MyBoard from './components/MyBoard';
// <Router>
//   <div className="App">
//     <div className="app-menu">
//         <Link to="/login">Login</Link>
//     </div>
//     <Switch>
//       <PrivateRoute path="/protected" component={MyBoard} />
//       <Route path="/login" component={LoginPage} />
//       <Route component={LoginPage} />
//     </Switch>
//   </div>
// </Router>
