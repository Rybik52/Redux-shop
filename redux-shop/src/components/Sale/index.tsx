import { FC } from "react";
import Gallery from "UI/Gallery";
import ProductCard from "components/ProductCard";
import styles from "components/Categories/Categories.module.scss";
import Wrapper from "UI/Wrapper";
import { Link } from "react-router-dom";

interface SaleProps {
    extendButton?: boolean;
    data: [object];
}

const Index: FC<SaleProps> = ({ extendButton, data }) => {
    if (!data.length) {
        return (
            <div className={styles.wrapper}>
                <Wrapper title="Error">Failed to load sales 😥</Wrapper>
            </div>
        );
    }

    return (
        <Gallery extendButton={extendButton} title="Sale">
            {data.map((item, index) => (
                <Link key={index} to={"/product/" + index}>
                    <ProductCard item={item} />
                </Link>
            ))}
        </Gallery>
    );
};

export default Index;
