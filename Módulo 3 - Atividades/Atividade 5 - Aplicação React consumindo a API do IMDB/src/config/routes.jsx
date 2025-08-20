import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Favorites from "../components/Favorites/Favorites";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={ <RootLayout /> } >
                <Route path="/" element={ <Home /> } />
                <Route path="/favoritos" element={ <Favorites /> } />
            </Route>
        </>
    )
)

export default router;