import { FC, ReactNode } from "react";
import styles from "./Gallery.module.scss";

import { ExtendButton } from "./ExtendButton";

interface GalleryProps {
    extendButton?: boolean;
    title: string;
    children: ReactNode;
}

const Index: FC<GalleryProps> = ({ extendButton, title, children }) => {
    return (
        <section className={styles.gallery}>
            <div className={styles.wrapper}>
                <h2 className={styles.header}>{title.trim()}</h2>
                {extendButton && (
                    <>
                        <ExtendButton
                            text={"All " + title.trim().toLowerCase()}
                        />
                    </>
                )}
            </div>
            <div className={styles.items}>{children}</div>
        </section>
    );
};

export default Index;
