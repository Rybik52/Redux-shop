import { FC } from "react";
import Gallery from "UI/Gallery";

interface SaleProps {
    extendButton?: boolean;
}

const Index: FC<SaleProps> = ({ extendButton }) => {
    return (
        <Gallery extendButton={extendButton} title="Sale">
            <div>карта</div>
        </Gallery>
    );
};

export default Index;
