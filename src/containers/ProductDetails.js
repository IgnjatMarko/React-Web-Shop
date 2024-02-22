import React, { useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { addtoCart } from "../redux/cartSlice";
import { Button } from "react-bootstrap";
import LoremIpsum from "react-lorem-ipsum";


const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  //  console.log(productId);

  const { img, title, price, rating } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = useCallback(async () => {
    const response = await axios
      .get(
        `https://my-json-server.typicode.com/fonovac/api2/products/${productId}`
      )
      .catch((err) => {
        console.log("Err ", err);
      });
    dispatch(selectedProduct(response.data));
  }, [dispatch, productId]);

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, productId, fetchProductDetail]);

  const addCartItem = () => {
    dispatch(addtoCart(product));
  };

  return (
    <div className="container">
      <div
        className="card mb-3 border-secondary mx-auto p-2 mt-3 rounded-5"
        style={{ maxWidth: "710px" }}
      >
        {Object.keys(product).length === 0 ? (
          <div className="text-center">... Loading</div>
        ) : (
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img} className="img-fluid rounded-start" alt={title} />
            </div>
            <div className="col-md-8">
              <div className="card-body text-primary">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price} RSD</p>
                <p className="card-text"><LoremIpsum p={1} /></p>
                <p className="card-text">
                  <small className="text-body-secondary">{rating}</small>
                </p>
                <div className="card-body">
                  <a href="#" className="btn btn-primary" onClick={addCartItem}>
                    Add to Cart
                  </a>
                  <Link to={"/"}>
                    <Button variant="link">Home</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
