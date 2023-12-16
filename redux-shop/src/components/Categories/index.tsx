import { FC } from "react";
import styles from "./Categories.module.scss";
import Gallery from "UI/Gallery";
import NoImage from "assets/no-image.png";

interface CategoriesProps {
    data: [object];
    extendButton?: boolean;
}

const Index: FC<CategoriesProps> = ({ extendButton, data }) => {
    return (
        <Gallery title="Categories" extendButton={extendButton}>
            {data.map((item, index) => (
                <div key={index} className={styles.item}>
                    <img src={item.img ? item.img : NoImage} alt={item.text} />
                    <span>{item.text}</span>
                </div>
            ))}
        </Gallery>
    );
};

export default Index;
