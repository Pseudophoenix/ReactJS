import React from 'react';
import Styled from 'styled-components';
export default function Register(props) {
    let btnStyle = {
        backgroundColor: "green",
        color: "white",
    }
    let btnText;
    let btnClasses = ["btn", "m-1"];
    var passType = "password";
    var StyledButton = Styled.button`
        display:${(props)=>props.flag?"inline-block":"block"};
        width:${(props)=>props.flag?"50%":"100%"}
        padding:10px 5px;
        background-color:${(props)=>props.color};
    `;
    const StyleDiv=Styled.div`
    background-color:red;

    `
    // let hidePass = "Hide Password";
    if (props.showPass === true) {
        btnStyle.backgroundColor = "red";
        btnStyle.color = "black";
        btnText = "Hide Password";
        btnText = "Hide Password";
        passType = "text";
        btnClasses.push("btn-danger");
    }
    else {
        btnStyle.backgroundColor = "green";
        btnStyle.color = "white";
        btnText = "Show Password";
        passType = "password";
        btnClasses.push("btn-success");
    }
    console.log(btnClasses);
    const StyleRegisterContainer=Styled.div`
    width: 500px;
    &:hover{
        box-shadow
    }
    `;
    return (

        <div className='card p-2 mt-2'><form onSubmit={props.submit}>
            <h1 className='text-center'>Registration Form</h1><div className='container mt-2'><label htmlFor="name">Name<input type="text" required name="name" className='form-control register-container'></input></label></div>
            <div className='container mt-2'><label htmlFor="name">Email<input type="text" name="mail" className='form-control register-container'></input></label></div>
            <div className='container mt-2'><label htmlFor="name">Password<input type={passType} name="pass" className='form-control register-container'></input></label></div>
            <button className='btn btn-primary m-1'>Submit</button>
            <button className={btnClasses.join(" ")} onClick={props.showPassClick} style={btnStyle}>{btnText}</button>
            {/* <StyledButton type="button" color="red"></StyledButton> */}
            {/* <StyledButton flag="1" type="button" color="violet"></StyledButton> */}
        </form>
{/* <StyledDiv/> */}
        </div>

    )
}

