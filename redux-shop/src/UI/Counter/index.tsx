import styles from "./Counter.module.scss";
import { useState } from "react";

const Index = () => {
    const [counter, setCounter] = useState(1);

    const handler = (e) => {
        e.preventDefault();
        setCounter(Math.max(e.target.value, 1));
    };

    return (
        <div className={styles.counter}>
            <button onClick={() => setCounter(Math.max(counter - 1, 1))}>
                -
            </button>
            <input type="number" value={counter} onChange={handler} />
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};

export default Index;
