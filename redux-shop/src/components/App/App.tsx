import Header from "components/Header";
import Categories from "components/Categories";
import testImg from "assets/test_img.png";
import Sale from "components/Sale";

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

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Categories extendButton={true} data={mokeData} />
                <Sale extendButton={true} />
            </main>
        </>
    );
};

export default App;
