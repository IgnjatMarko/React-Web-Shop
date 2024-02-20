import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent"

const ProductListing = () => {

    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    
    const fetchProducts = useCallback(async () => {

        const response = await axios
        .get("https://my-json-server.typicode.com/fonovac/api2/products")
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data));
        }, [dispatch]);

        useEffect(() => {
            fetchProducts();
        }, [fetchProducts])

    console.log("Products :", products);
    
    return (
        <div className="container">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 d-flex justify-content-around">
                <ProductComponent />
            </div>
            
        </div>
    )
}

export default ProductListing;