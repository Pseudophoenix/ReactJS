import React from 'react'
import { useState, useEffect } from 'react'
import HookMouse from './HookMouse';
export default function MouseContainer() {
    const [display, setDisplay] = useState(false);
    return (
        <div>
            
            <button onClick={()=>{
                setDisplay(!display)
            }} className='m-3 btn btn-primary'>Click Me
            {display}</button>
            {display && <HookMouse/>}
        </div>
    )
}
