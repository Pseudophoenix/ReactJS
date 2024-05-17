import './App.css';
import React, { Component } from 'react'
import Login from './Component/Login';
import Register from './Component/Register';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { sendPasswordResetEmail } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { sendEmailVerification } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";
// if (firebase.app.length<0) {
const app = initializeApp({
  apiKey: "AIzaSyDufZidEt5roqhW9_03eM_g6-jhXDDnVtc",
  authDomain: "olalite-93576.firebaseapp.com",
  databaseURL: "https://olalite-93576-default-rtdb.firebaseio.com",
  projectId: "olalite-93576",
  storageBucket: "olalite-93576.appspot.com",
  messagingSenderId: "168490161104",
  appId: "1:168490161104:web:757a94048849367b8f5fd5"
});


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Register->0
      // Log->1
      page: 1,
      name: null,
      email: null,
      message: "",
      type: null,
    }
  }
  pageSwitchHandler = (event) => {
    this.setState({ page: !this.state.page, message: "" })
    event.preventDefault();
  }
  registrationHandler = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const pass = event.target.pass.value;
    const confirm = event.target.confirm.value;
    // if(email===null)
    if (pass !== confirm) {
      this.setState({ message: "Password does not match" }, () => {
        // console.log(pass,",",confirm);
      })
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed up 
        sendEmailVerification(userCredential.user);
        this.setState({ message: "User Registered Successfully!!", type: 1 }, () => {
          event.target.email.value = "";
          event.target.pass.value = "";
          event.target.confirm.value = "";
        });

        console.log(userCredential);
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        this.setState({ type: 2, message: error.message });
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(error.Error);
        console.log(error.message);
        // ..
      });
  }
  signInHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass).then((data) => {
      console.log(data);
      if (data.user.emailVerified == true)
        this.setState({ message: "Succesfully Logged In", type: 1 }, () => {
          event.target.email.value = "";
          event.target.pass.value = "";
        });
      else
        this.setState({ message: "Your email is not verified yet.", type: 0 });
    }).catch((error) => {
      this.setState({ message: error.message, type: 2 });
      console.log(error);
      // sendEmailVerification();
    });

    console.log("Logged");

  }
  resetPasswordHandler = (event) => {
    const auth=getAuth();
    console.log(event.target.email);
    // const email=event.target.email.value;
    // console.log("Passsword Reset");
    // sendPasswordResetEmail(auth,email).then((data)=>{
    //   console.log("Successfully sent the mail for reset password to ",email);
    //   console.log(data);
    // }).catch((error)=>{
    //   console.log(error);
    //   console.log(error.code,error.message);
    // });

  }
  googleLogInHandler=()=>{
    console.log("Hey Google");  
    const auth=getAuth();
    const goog=new GoogleAuthProvider();
    signInWithPopup(auth,goog).then((result)=>{
      console.log(result);
      this.setState({message:"Hey "+result.user.displayName+"! You have logged in Successfully",type:1});
    }).catch((error)=>{
      console.log(error);
      this.setState({message:""});
    });
    
  }
  render() {
    return (
      <>
        {this.state.page == 0 ? (<Register type={this.state.type} message={this.state.message} switch={this.pageSwitchHandler} register={this.registrationHandler} google={this.googleLogInHandler}/>) : (<Login message={this.state.message} type={this.state.type} switch={this.pageSwitchHandler} login={this.signInHandler} resetPass={this.resetPasswordHandler} google={this.googleLogInHandler}/>)}
      </>
    )
  }
}
