import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store";
import "./index.css";

import MainPage from "pages/MainPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <RouterProvider router={router} />,
    </Provider>,
);
