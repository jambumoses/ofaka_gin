import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product_Item from "../components/Product_Item";
import { constantActions } from "../store/constantSlice";

export default function Product() {
  
  const dispatch = useDispatch();
  dispatch(constantActions.updateCurrentPage("products"));

  const products = useSelector((state) => state.constant.data.products);

  return (
    <main className="products-section">
      <section className="products-container">
        {products.map(function (item) {
          return <Product_Item key={item._id} data={item} />;
        })}
      </section>

      <div className="products-more-btn-section">
        <button type="button">see more</button>
      </div>
    </main>
  );
}
