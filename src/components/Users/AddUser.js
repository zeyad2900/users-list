import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErorrModule from "../UI/ErorrModule";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const [addedName, setAddedName] = useState("");
    const [addedAge, setAddedAge] = useState("");
    const [error, setError] = useState();

    const addNameHandler = (e) => {
        setAddedName(e.target.value);
    };
    const addAgeHandler = (e) => {
        setAddedAge(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (addedName.trim().length === 0 || addedAge.trim().length === 0) {
            setError({
                title: "invalid form",
                message: "please input a valid name and age (none empty values)",
            });
            return;
        }
        if (+addedAge < 1) {
            setError({
                title: "invalid age",
                message: "please enter age > 0",
            });
            return;
        }
        props.onAdd(addedName, addedAge);
        setAddedName("");
        setAddedAge("");
    };
    const confirmHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && <ErorrModule title={error.title} message={error.message} onConfirm={confirmHandler}></ErorrModule>}
            <Card className={styles.input}>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="username">User name</label>
                    <input type="text" id="username" value={addedName} onChange={addNameHandler}></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" value={addedAge} onChange={addAgeHandler}></input>
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    );
};
export default AddUser;
