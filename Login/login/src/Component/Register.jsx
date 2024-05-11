import React from 'react'
import { initializeApp } from 'firebase/app';
export default function Register(props) {
    var messagetype=[];
    if(props.type===1){
        messagetype.push("text-success");   
    }
    else{
        messagetype.push("text-danger");
    }
    return (
        <div>
            <div className="container">
                <div className='m-5 p-5 card text-center'>
                    <h2>Create Account</h2>
                    <p>Get started with your free account</p>
                    <div className={messagetype} >{props.message}</div>
                    <button  className="btn btn-primary btn-m btn-block">SignUp via Google</button>
                    <button  className="btn btn-secondary btn-m btn-block">SignUp via Facebook</button>
                    <p>or</p>
                    <form onSubmit={props.register}>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"></div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Email address" name="email" />
                        </div>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"></div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Create Password" name="pass" />
                        </div>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"></div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Repeat Password" name="confirm" />
                        </div>
                        <input type="submit" className="btn btn-secondary btn-m btn-block" style={{ backgroundColor: "#33cc4b" }} value="Create Account" />
                    </form>
                    <h6>Have an account?<a href="#" onClick={props.switch}>Log In</a></h6>
                </div>
            </div>
        </div >
    )
}
