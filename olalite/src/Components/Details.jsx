import React, { Component } from 'react';
export default function Details(props) {
  return (
    <>
      <div className='container p-5'>
        <div className='card mt-5 p-4'>
          <h2>Details</h2>
          <form onSubmit={props.submit}>
            <div className='form-group'>
              <label>1. Name</label>
              <input type="text" placeholder='Please enter your name' name="name" required className="form-control"></input>
            </div>
            <div className='form-group'>
              <label>2. Email</label>
              <input type="email" name="email"placeholder='Please enter your email' required className="form-control"></input>
            </div>
            <button className="btn btn-primary">Next</button>
          </form>
        </div>
      </div>
    </>
  );
}
