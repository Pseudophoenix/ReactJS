import React from 'react'
import { useState } from 'react';
export default function HookCounter() {
    const [count, incCount] = useState(null);
    return (
        <div><button className="mt-3 btn-primary btn" onClick={() => {
            { count === null ? (incCount(null)) : (incCount(count + 1)) }

        }
        }>{count !== null ? ("Click Me " + count) : ("First Press Reset")}</button>
            <button className="mt-3 ml-3 btn-primary btn" onClick={() => incCount(0)} style={{ "backgroundColor": "red", "color": "white" }}>Reset </button>
        </div>
    )
}
