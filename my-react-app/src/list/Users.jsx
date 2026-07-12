import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json()) // 1. Parse the readable stream into JSON
            .then((data) => {
                setUsers(data); // 2. Set the actual data array into your state
            });
    }, []);

    console.log(users);

    return (
        <>
            {users.map((user) => {
                return <h1>{user.name}</h1>;
            })}
        </>
    );
}
export default Users;