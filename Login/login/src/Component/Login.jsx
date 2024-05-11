import React from 'react'

export default function Login(props) {
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
                    <h2>Log in</h2>
                    <p>Welcome Back</p>
                    <div className={messagetype} >{props.message}</div>
                    <button type="button" className="btn btn-primary btn-m btn-block">Login via Google</button>
                    <button type="button" className="btn btn-secondary btn-m btn-block">Login via Facebook</button>
                    <p>or</p>
                    <form onSubmit={props.login}>
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text"></div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Email address" name="email"/>
                    </div>
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text"></div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Password" name="pass"/>
                    </div>
                    <input type="submit" className="btn btn-secondary btn-m btn-block" style={{ backgroundColor: "#33cc4b" }} value="Log In"/>
                    </form>
                        <h6>New User?<a href="#" onClick={props.switch}>Create an account </a></h6>
                </div>
            </div>
        </div >
    )
}
