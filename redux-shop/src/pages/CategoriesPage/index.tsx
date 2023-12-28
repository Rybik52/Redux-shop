import Categories from "components/Categories";
import testImg from "assets/test_img.png";

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

const Index = () => {
    return <Categories data={mokeData} />;
};

export default Index;
