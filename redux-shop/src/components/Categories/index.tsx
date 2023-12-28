import { FC } from "react";
import Gallery from "UI/Gallery";
import styles from "./Categories.module.scss";
import NoImage from "assets/no-image.png";
import Wrapper from "UI/Wrapper";

interface CategoriesProps {
    data: [
        {
            img?: string;
            text: string;
        },
    ];
    extendButton?: boolean;
}

const Index: FC<CategoriesProps> = ({ extendButton, data }) => {
    if (!data.length) {
        return (
            <div className={styles.wrapper}>
                <Wrapper title="Error">Failed to load categories 😥</Wrapper>
            </div>
        );
    }

    return (
        <Gallery title="Categories" extendButton={extendButton}>
            {data.map((item, index) => (
                <div key={index} className={styles.item}>
                    <img
                        loading="lazy"
                        src={item.img || NoImage}
                        alt={item.text}
                    />
                    <span>{item.text}</span>
                </div>
            ))}
        </Gallery>
    );
};

export default Index;
