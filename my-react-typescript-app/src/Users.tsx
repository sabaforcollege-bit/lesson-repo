import { useEffect, useState } from "react"
import MyButton from "./Mybutton";

interface IUser {
    id: number,
    name: string,
    surname: string,
    email: string,
    phone: string,
    website: string
}

function Users() {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((resp) => resp.json())
            .then((data) => setUsers(data));
    }, []);
    console.log(users)
    return (
        // <>
        //     <h1>Users List :</h1>
        //     {users.map((user: IUser) => (
        //         <h1>{user.name}</h1>
        //     ))}
        <ul>
            {users.map(({ email }) => (
                <li>
                    <MyButton text={email} />
                </li>
            ))}
        </ul>
        // </>
    )
}
export default Users