import logo from "assets/logo.svg";
import chartIco from "assets/cart.svg";
import styles from "./Header.module.scss";

const Index = () => {
    return (
        <header>
            <a href="#" className={styles.logo}>
                <img src={logo} alt="logo" />
            </a>
            <ul>
                <li>
                    <a href="#">Main Page</a>
                </li>
                <li>
                    <a href="#">Categories</a>
                </li>
                <li>
                    <a href="#">All products</a>
                </li>
                <li>
                    <a href="#">All sales</a>
                </li>
            </ul>
            <a href="#" className={styles.cart}>
                <img src={chartIco} alt="cart ico" />
            </a>
        </header>
    );
};

export default Index;
