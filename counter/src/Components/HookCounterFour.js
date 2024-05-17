import React from 'react'
import { useState } from 'react'
function HookCounterFour() {
    const [items, setItems] = useState([]);
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }]);
    }
    function remItem() {
        setItems(items.slice(0, items.length - 1))
    }
    return (
        <div>
            <button onClick={addItem} className='btn m-2 btn-primary'>Push</button>
            <button onClick={remItem} className='btn m-2 btn-primary'>Pop</button>
            <div className='m-5'>
                <ul className='list-group'>
                    {items.map(item => (
                        <li className='list-group-item' key={item.id}>{item.value}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HookCounterFour