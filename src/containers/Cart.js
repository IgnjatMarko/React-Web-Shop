import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decreaseQty,
  deleteAll,
} from "../redux/cartSlice";

import { Button, Offcanvas } from "react-bootstrap";

const Cart = () => {
  const [show, setShow] = useState(false);

  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartNum = cart.length;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleIncrement = (id) => {
    dispatch(incrementQty(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQty(id));
  };

  const handleDeleteItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };
  //  console.log(cart);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        type="button"
        className="btn btn-primary position-relative"
      >
        Cart
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartNum}
          <span className="visually-hidden">cart items</span>
        </span>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        backdropClassName="false"
        scroll
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        {/* <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body> */}
        {cartNum === 0 ? (
          <Offcanvas.Header>Nothing in the cart.</Offcanvas.Header>
        ) : (
          <div className="container">
            {cart.map((item) => {
              const { id, img, title, price, quantity } = item;

              return (
                <ul className="list-group list-group-horizontal" key={id}>
                  <li className="list-group-item">
                    <img src={img} alt={title} style={{ width: "69px" }} />
                  </li>
                  <li className="list-group-item">{title}</li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    {price} RSD
                  </li>
                  <li className="list-group-item d-flex flex-column align-items-center">
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      onClick={() => handleIncrement(id)}
                    >
                      +
                    </button>
                    {quantity}
                    <button
                      type="button"
                      className="btn btn-warning btn-sm"
                      onClick={() => handleDecrease(id)}
                    >
                      -
                    </button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteItem(id)}
                    >
                      &times;
                    </button>
                  </li>
                </ul>
              );
            })}
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Total: {cart.reduce((a, b) => a + b.price * b.quantity, 0)} RSD
              </li>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteAll()}
              >
                Delete all
              </button>
            </ul>
          </div>
        )}
      </Offcanvas>
    </>
  );
};

export default Cart;
