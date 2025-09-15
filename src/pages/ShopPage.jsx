import ProductList from "../components/ShopPage/ProductList";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ShopMenu from "../components/ShopPage/ShopMenu";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../store/productSlice";
import productsData from "../data/productData";


export default function ShopPage() {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts(productsData));
    }, [dispatch]);

    return (
        <>
            <Header />
            <ShopMenu />
            <ProductList />
            <Footer />
        </>
    )
}