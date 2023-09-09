import { useEffect, useState } from "react";
import User from "./user";

export default function users(){
    const [users, usersCount] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => usersCount(data))
    }, [])

    return(
        <div>
            <h2>users : {users.length}</h2>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    );
}