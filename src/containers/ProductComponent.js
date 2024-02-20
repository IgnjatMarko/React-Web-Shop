import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../redux/cartSlice";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  // const { id, img, title, price, rating } = props;
  const renderList = products.map((product) => {
    
    const { id, img, title, price, rating } = product;

    
    const addCartItem=()=>{
     
      dispatch(addtoCart(product))
    }
  
    return (
      <div className="card px-4 g-5" style={{ width: "18rem" }} key={id}>
        <Link to={`/product/${id}`}>
          <img src={img} className="card-img-top" alt={title} />
        </Link>
        <div className="card-body">
          <Link to={`/product/${id}`}>
            <h5 className="card-title">{title}</h5>
          </Link>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {price} RSD
          </h6>

          <p className="card-text">{rating}</p>

          <div className="card-body">
            <a href="#" className="btn btn-primary" onClick={addCartItem}>
              Add to Cart
            </a>
            <Link to={`/product/${id}`}>
            <a href="#" className="card-link ms-2">
              Details
            </a>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
