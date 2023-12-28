import styles from "./MainPage.module.scss";
import Categories from "components/Categories";
import Sale from "components/Sale";
import Button from "UI/Button";

import testImg from "assets/test_img.png";
import handsImg from "assets/hands.png";
import bridgeImg from "assets/bridge.png";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllProducts } from "store/productsSlice";

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
    {
        img: testImg,
        text: "Fertilizer",
    },
];
const mokeData2 = [
    {
        title: "Decorative forged bridge",
        price: 150,
        discount: 34,
    },
    {
        title: "Decorative forged bridge",
        image: bridgeImg,
        price: 500,
        discount: 50,
    },
    {
        title: "Decorative forged bridge",
        image: bridgeImg,
        price: 1000,
        discount: 50,
    },
    {
        title: "Decorative forged bridge",
        image: bridgeImg,
        price: 1000,
        discount: 50,
    },
    {
        title: "Decorative forged bridge",
        image: bridgeImg,
        price: 1000,
        discount: 50,
    },
    {
        title: "Decorative forged bridge",
        image: bridgeImg,
        price: 500,
        discount: 50,
    },
];

const Index = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:3333/products/all")
            .then((response) => response.json())
            .then((data) => {
                dispatch(setAllProducts(data));
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, [dispatch]);

    return (
        <main>
            <section className={styles.welcome}>
                <div className={styles.wrapper}>
                    <h1>Amazing Discounts on Garden Products!</h1>
                    <div className={styles.button}>
                        <Button>Check out</Button>
                    </div>
                </div>
            </section>
            <Categories data={mokeData} extendButton={true} />
            <section className={styles.saleSection}>
                <div className={styles.saleBanner}>
                    <h2>5% off on the first order</h2>
                    <div className={styles.wrapper}>
                        <img src={handsImg} alt="hands" />
                        <form>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Phone number"
                                name="phone"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                required
                            />
                            <input type="submit" value="Get a discount" />
                        </form>
                    </div>
                </div>
            </section>
            <Sale extendButton={true} data={mokeData2} />
        </main>
    );
};

export default Index;
