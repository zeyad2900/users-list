import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [data, setData] = useState([]);

    const addHandler = (u, a) => {
        setData((prev) => {
            return [...prev, { Name: u, age: a }];
        });
    };

    return (
        <div>
            <AddUser onAdd={addHandler}></AddUser>
            <UsersList users={data}></UsersList>
        </div>
    );
}

export default App;
