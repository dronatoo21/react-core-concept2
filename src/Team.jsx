import { useState } from "react";

export default function(){
    const [player, playerCount] = useState(11);
    const handleAdd = () => {
        const newPlayer = player + 1;
        playerCount(newPlayer);
    }
    const handleRemove = () => {
        const removePlayer = player - 1;
        playerCount(removePlayer);
    }
    return(
        <div>
            <h1>Player : {player}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}