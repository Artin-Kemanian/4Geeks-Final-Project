import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Admin } from "./pages/admin";
import { City } from "./pages/city";
import injectContext from "./store/appContext";
import { Login } from "./component/login.jsx";
import { Signup } from "./component/signup.jsx";
import { OneCountry } from "./component/onecountry";
import { Twocountry } from './component/twocountry';
import { Comentario } from "./component/comentario.jsx";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LoginAdmin } from "./component/loginadmin";
import { Ciudades } from "./pages/ciudades";
import { Country } from "./pages/country";
import { AllFavoritesCities } from "./component/allfavoritescities";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <div className="container-fluid">
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Demo />} path="/demo" />
                            <Route element={<Login />} path="/login" />
                            <Route element={<Admin />} path="/admin" />
                            <Route element={<City />} path="/city" />
                            <Route element={<OneCountry />} path="/onecountry" />
                            <Route element={<Signup />} path="/signup" />
                            {/* <Route element={<Ciudades />} path="/ciudades" /> */}
                            <Route element={<Twocountry />  } path="/twocountry" />
                            <Route element={<Ciudades />  } path="/ciudades" />
                            <Route element={<Single />} path="/single/:theid" />
                            {/* <Route element={<Twocountry />} path="/" /> */}
                            <Route element={<LoginAdmin />} path="/loginadmin" />
                            <Route element={<Country />} path="/country/:name" />
                            <Route element={<Comentario />} path="/:country/:city/comentario/" />
                            <Route element={<h1>Not found!</h1>} />
                        </Routes>
                    </div>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
