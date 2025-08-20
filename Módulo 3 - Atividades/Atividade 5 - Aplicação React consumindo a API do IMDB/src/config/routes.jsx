import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={ <RootLayout /> } >
                <Route path="/" element={ <Home /> } />
            </Route>
        </>
    )
)

export default router;