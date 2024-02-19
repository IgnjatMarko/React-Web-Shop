import Header from "./containers/Header";
import Footer from "./containers/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import Checkout from "./containers/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route>404 Not Found!</Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
