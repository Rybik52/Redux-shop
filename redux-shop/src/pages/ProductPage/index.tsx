import styles from "./ProductPage.module.scss";
import bridgeImg from "assets/bridge.png";
import Counter from "UI/Counter";
import Button from "UI/Button";

const Index = () => {
    return (
        <main>
            <div className={styles.wrapper}>
                <img src={bridgeImg} alt="" />
                <div className={styles.info}>
                    <h3>Secateurs</h3>
                    <div className={styles.price}>
                        199 <span>240</span>
                        <span className={styles.discount}>17</span>
                    </div>
                    <div className={styles.addToCart}>
                        <Counter />
                        <Button>Add to cart</Button>
                    </div>
                    <div className={styles.description}>
                        <h5>Description</h5>
                        <p>
                            This high quality everyday secateur features a fully
                            hardened and tempered, high-carbon steel blade for
                            lasting sharpness. For comfort, the robust but
                            lightweight alloy handles are covered in a soft
                            grip, in a bright terracotta colour for maximum
                            visibility in the garden. It won’t be easy to leave
                            this pruner behind at the end of the day! Rubber
                            cushion stops prevent jarring over repeated use,
                            reducing hand strain for the user.
                        </p>
                        <p>
                            This secateur cuts up to 2.5 cm diameter. Carrying
                            RHS endorsement, possibly the highest accolade in
                            gardening, for peace of mind this pruner comes with
                            a ten-year guarantee against manufacturing defects.
                        </p>
                        <span>Read more</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Index;
