import React from 'react'

export default function Greet(props) {
  return (
    <>
    <div className='App-link'>Greet</div>
    <h3>{props.name}</h3>
    {/* <h3>{props.mail}</h3> */}
    <h3 className='App-'>Thank you for joining us.</h3>
    <h3>
        Verification sent to {props.mail}.
    </h3>
    </>
  );
}
