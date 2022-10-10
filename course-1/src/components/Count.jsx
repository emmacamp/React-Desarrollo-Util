import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const Count = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count;
    })

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1);
                // document.title = count + 1;
            }
            }>+ 1
            </button>
            <button onClick={() => {
                setCount(count + 2);
                // document.title = count + 2;
            }
            }>+ 2
            </button>
        </div>
    )
}

export default Count