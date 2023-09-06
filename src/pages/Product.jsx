import React from "react";

export default function Product() {
  return (
    <main className="products-section">
      <section className="products-container">
        {/* <!-- start --> */}
        <div className="product-item">
          <span className="product-item-price-tag-star">
            <i
              className="fa fa-star"
              style={{
                fontSize: "20px",
                color: "gold",
                transform: "rotateZ(30deg)",
              }}
            ></i>
          </span>
          <span className="product-item-price-tag">shs.15,000</span>

          <a className="product-item-get" href="./details.html">
            {" "}
            get{" "}
          </a>
          <span className="product-item-thumbnail">
            <img
              src={require("../assets/img/gabriele-garanzelli-yqAk8NyqN3Y-unsplash-removebg-preview.png")}
              alt=""
            />
          </span>
          <p className="product-item-description">
            <span style={{ paddingRight: "3px" }}>red wine</span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            neque natus! Eum corrupti praesentium iste neque non minus,
            inventore voluptates
            <br />
            <span>shs.15,00</span>
          </p>
        </div>

        {/* <!-- end --> */}
      </section>

      <div className="products-more-btn-section">
        <button type="button">see more</button>
      </div>
    </main>
  );
}
