import React from 'react'
import { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({ firstname: "", lastname: "" })
    return (
        <div>
            <form>
            <input className="m-2" type="text" value={name.firstname} onChange={e=>setName({firstname:e.target.value,lastname:name.lastname,})}/>
            <input type="text" className="m-2" value={name.lastname}
            onChange={e=>setName({...name,lastname:e.target.value})}/>
{/* ... Operator - make a replica of name and then only update a part of the object */}

            {/* <button className='btn btn-primary'>Click Me</button> */}
            <h2>FirstName:{name.firstname}</h2>
            <h2>LastName:{name.lastname}</h2>
            {JSON.stringify(name)}
            </form>
        </div>
    )
}

export default HookCounterThree