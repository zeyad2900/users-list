import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((ele, index) => {
                    return (
                        <li key={index}>
                            {ele.Name}({ele.age} Years old)
                        </li>
                    );
                })}
            </ul>
        </Card>
    );
};
export default UsersList;
