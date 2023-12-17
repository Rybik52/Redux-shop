import styles from "./MainPage.module.scss";
import Header from "components/Header";
import Categories from "components/Categories";
import Contact from "components/Contact";
import Button from "UI/Button";

import testImg from "assets/test_img.png";

const mokeData = [
    {
        img: testImg,
        text: "Fertilizer",
    },
    {
        text: "test",
    },
    {
        img: testImg,
        text: "Fertilizer",
    },
    {
        img: testImg,
        text: "Fertilizer",
    },
];

const Index = () => {
    return (
        <main>
            <Header />
            <section className={styles.welcome}>
                <div className={styles.wrapper}>
                    <h1>Amazing Discounts on Garden Products!</h1>
                    <Button>Check out</Button>
                </div>
            </section>
            <Categories data={mokeData} extendButton={true} />
            <Contact />
        </main>
    );
};

export default Index;
