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

// import React, { useState } from "react";
// import { Route, Link } from "react-router-dom";
// import "./App.css";
// import SignUpPage from "./components/SignUpPage";
// import MyBoard from "./components/MyBoard";
// import LoginPage from "./components/LoginPage";
// import data from "./data";
// import Community from "./components/Community";
// import EditArticle from "./components/EditArticle";

// function App() {
//   return (
//     <div className="App">
//       <Route exact path="/" component={SignUpPage} />
//       <Route path="/log-in" component={LoginPage} />
//       <Route exact path="/edit-article" component={EditArticle} />
//       <Route exact path="/myboard" component={MyBoard} />  
//       <Route exact path="/community" component={Community} />
//  
//     </div>
//   );
// }

// export default App;


