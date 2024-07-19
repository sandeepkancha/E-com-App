import { Routes,Route } from "react-router-dom";
import Home from "../components/Home";
import Cart from "../components/Cart";
import Product from "../components/Product";
import Header from "./Header";

const Main = () =>{
    return(
        <main>
            <Header />
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/Product" element={<Product />} />
                    <Route path="/Cart" element={<Cart />} />
                </Routes>
        </main>
    )
}

export default Main;