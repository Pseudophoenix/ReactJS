import React from 'react'
import './../App.css';
import { useState } from 'react'
export default function HookCounterTwo() {
    const [count, setCount] = useState(0);
    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount =>
                prevCount + 1)
        }
    }
    return (
        <div>
            <div className='App-logo'>{count}</div>
            <button className="mt-3 ml-3 btn-primary btn" onClick={() => setCount(count=>count + 1)} style={{ "backgroundColor": "indigo", "color": "white" }}>Increment </button>

            <button className="mt-3 ml-3 btn-primary btn" onClick={() => setCount(count=>count - 1)} style={{ "backgroundColor": "green", "color": "white" }}>Decrement</button>

            <button className="mt-3 ml-3 btn-primary btn" onClick={() => setCount(0)} style={{ "backgroundColor": "red", "color": "white" }}>Reset </button>

            <button className="mt-3 ml-3 btn-primary btn" onClick={incrementFive} style={{ "backgroundColor": "red", "color": "white" }}>Increment by 5 </button>
        </div>
    )
}

// .App-header {
// }

// .App-link {
// }