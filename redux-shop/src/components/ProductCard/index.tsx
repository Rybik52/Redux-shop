import styles from "./ProductCard.module.scss";
import { FC } from "react";
import Button from "UI/Button";
import NoImage from "assets/no-image.png";

interface ProductCardProps {
    item: {
        image?: string;
        title: string;
        discount: number;
        price: number;
    };
}

const Index: FC<ProductCardProps> = ({ item }) => {
    return (
        <div className={styles.card}>
            <div className={styles.preview}>
                <span className={styles.discount}>{item.discount}</span>
                <img src={item.image || NoImage} alt={item.title} />
                <div className={styles.buyButton}>
                    <Button>Add to cart</Button>
                </div>
            </div>
            <div className={styles.caption}>
                <p>{item.title}</p>
                <div className={styles.price}>
                    {(item.price / 100) * item.discount}
                    <span>{item.price}</span>
                </div>
            </div>
        </div>
    );
};

export default Index;
