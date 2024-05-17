import React, { useEffect } from 'react'
import { useState } from 'react'
function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const tick = () => {
        // setCount(count+1)
        setCount(prevCount => prevCount + 1)
    }
    useEffect(() => {
        // function doSomething(){
        //     console.log(someProp);
        // }
        const interval = setInterval(tick, 2000)
        return () => {
            clearInterval(interval)
        }
        // },[count])
        // doSomething()
    // }, [someProp])
}, [])
    return (
        <div><h3>{count}</h3></div>
    )
}

export default IntervalHookCounter