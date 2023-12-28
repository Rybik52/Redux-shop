import styles from "./AllProducts.module.scss";
import Gallery from "UI/Gallery";
import { Link } from "react-router-dom";
import ProductCard from "components/ProductCard";
import bridgeImg from "assets/bridge.png";
import PriceFilter from "components/Filters/PriceFilter";
import CheckboxFilter from "components/Filters/CheckboxFilter";

const data = [
    {
        title: "Decorative forged bridge",
        image: bridgeImg,
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
    return (
        <main>
            <div className={styles.wrapper}>
                <h1>Tools and equipment</h1>
                <div className={styles.filters}>
                    <PriceFilter />
                    <CheckboxFilter label="Discounted items" />
                </div>
            </div>
            <Gallery>
                {data.map((item, index) => (
                    <Link key={index} to={"/product/" + index}>
                        <ProductCard item={item} />
                    </Link>
                ))}
            </Gallery>
        </main>
    );
};

export default Index;
