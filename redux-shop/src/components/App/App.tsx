import Header from "components/Header";
import Sale from "components/Sale";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Sale extendButton={true} />
            </main>
        </>
    );
};

export default App;
