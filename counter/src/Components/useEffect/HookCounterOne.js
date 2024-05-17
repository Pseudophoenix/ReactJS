import React from 'react'
import { useState ,useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("Updating the title");
        document.title=`You clicked ${count} times`
    },[count])

    const [name,setName]=useState("");
    // Use Effect runs after every single rendering of the component
    return (
        <div>
            <div className='d-flex justify-content-center'>
          <input className=" m-2 form-control w-25" name="name" type='text' value={name} onChange={(e)=>{
            setName(e.target.value)
          }} />
        </div>
            <button style={{ "backgroundColor": "green","borderRadius":"17px"}} className="mt-5 btn btn-primary" onClick={() => {
                setCount(count + 1)
            }}> Click {count} times </button>

        </div>
    )
}

export default HookCounterOne