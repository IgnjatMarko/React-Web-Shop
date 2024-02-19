import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  console.log(productId);

  const { img, title, price, rating } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(
        `https://my-json-server.typicode.com/fonovac/api2/products/${productId}`
      )
      .catch((err) => {
        console.log("Err ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="container">
      <div className="card mb-3 border-secondary mx-auto p-2 mt-3 rounded-5" style={{ maxWidth: "710px" }}>
        {Object.keys(product).length === 0 ? (
          <div className="text-center">... Loading</div>
        ) : (
          <div class="row g-0">
            <div class="col-md-4">
              <img src={img} class="img-fluid rounded-start" alt={title} />
            </div>
            <div class="col-md-8">
              <div class="card-body text-primary">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">
                  {price} RSD
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                  {rating}
                  </small>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
