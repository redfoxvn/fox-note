import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {signInWithGoogle} from "./service/firebase";

function App() {
  const onSuccess = (user: any): void => {
    console.log(user);
  }

  const signInWithFirebase = () => {
    //sign in with google
    signInWithGoogle(onSuccess);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>

        <button
          type="button"
          className="btn btn-success"
          onClick={signInWithFirebase}
        >
          Login with Google
        </button>
      </header>
    </div>
  );
}

export default App;
