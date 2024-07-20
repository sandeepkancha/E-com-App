import { Routes,Route } from "react-router-dom";
import Home from "../components/Home";
import Cart from "../components/Cart";
import Product from "../components/Product";
import Header from "./Header";
import ProductDetail from "../components/ProductDetail";
import Footer from "./Footer";

const Main = () =>{
    return(
        <main>
            <Header />
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/Products" element={<Product />} />
                    <Route path="/Products/:id" element={<ProductDetail />} />
                    <Route path="/Cart" element={<Cart />} />
                </Routes>
                <Footer />
        </main>
    )
}

export default Main;