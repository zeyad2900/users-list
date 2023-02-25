import Button from "./Button";
import Card from "./Card";
import styles from "./ErorrModule.module.css";

const ErorrModule = (props) => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirm}>Ok</Button>
                </footer>
            </Card>
        </div>
    );
};
export default ErorrModule;
