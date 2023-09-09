import { useState } from "react"

export default function (){
    const [count, setCount] = useState(0);
    const countBtn = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const decreaceBtn = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return(
        <div>
            <h1>count : {count}</h1>
            <button onClick={countBtn}>set count</button>
            <button onClick={decreaceBtn}>dc count</button>
        </div>
    )
}