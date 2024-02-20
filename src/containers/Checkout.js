import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";


const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const renderCart = Object.values(cartItems).map((item) => {


  const { id, img, title, price, quantity } = item;
        console.log(cartItems)

  return (
    <div className="container">
      <div
        className="card mb-3 border-secondary mx-auto p-2 mt-3 rounded-5"
        style={{ maxWidth: "710px" }}
      >
        {Object.keys(cartItems).length === 0 ? (
          <div className="text-center">... No items selected</div>
        ) : (
          <div className="row g-0" key={id}>
            <div className="col-md-4">
              <img src={img} class="img-fluid rounded-start" alt={title} />
            </div>
            <div className="col-md-8">
              <div className="card-body text-primary">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price} RSD</p>
                <p className="card-text">
                  <small className="text-body-secondary">Quantity: {quantity}</small>
                </p>
                <a href="#" className="btn btn-warning btn-sm" onClick={() => dispatch(removeFromCart({id: item.id}))}>
                  Remove Item
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
    return <>{renderCart}</>
};

export default Checkout;
