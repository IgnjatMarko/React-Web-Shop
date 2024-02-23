import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../redux/cartSlice";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [range, setRange] = useState(10000);

  const renderList = products
    .filter((product) => {
      return select.toLowerCase() === ""
        ? product
        : product.title.toLowerCase().includes(select.toLowerCase());
    })
    .filter ((product) => {
      return range === 10000
        ? product
        : product.price <= range;
    })
    .filter((product) => {
      return search.toLowerCase() === ""
        ? product
        : product.title.toLowerCase().includes(search.toLowerCase());
    })
    .filter((product) => {
      return search.toLowerCase() === ""
        ? product
        : product.title.toLowerCase().includes(search.toLowerCase());
    })
    .map((product) => {
      const { id, img, title, price, rating } = product;

      const addCartItem = () => {
        dispatch(addtoCart(product));
      };

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

  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary bs-info-bg-subtle">
        <div
          className="d-flex justify-content-around align-items-center"
          style={{ width: "100%" }}
        >
          <button type="button" className="btn btn-primary ms-2" disabled>
            Filters
          </button>
          <select
            className="form-select d-flex align-items-end"
            aria-label="Small select example"
            style={{ width: "25%" }}
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="">Select headphones brand</option>
            <option value="boAt">boAt</option>
            <option value="JBL">JBL</option>
          </select>
          <div className="">
            <label for="customRange2" className="form-label">
              Price range
            </label>
            <input
              type="range"
              className="form-range"
              min="1000"
              max="10000"
              step="250"
              id="customRange2"
              value={range}
              style={{ width: "100%" }}
              onChange={(e) => setRange(e.target.value)}
            />
            <p>{range}</p>
          </div>
          <form className="d-flex me-2" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </nav>
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 d-flex justify-content-around">
        {renderList}
      </div>
    </div>
  );
};

export default ProductComponent;
