import React from "react";

export default function Product_Item({ data }) {
  return (
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
      <span className="product-item-price-tag">
        {data.currency}.{data.price}
      </span>

      <a className="product-item-get" href={"/details?product=" + data._id}>
        {" "}
        get{" "}
      </a>
      <span className="product-item-thumbnail">
        <img src={require("../assets/img/gabriele-garanzelli-yqAk8NyqN3Y-unsplash-removebg-preview.png")} alt="" />
      </span>
      <p className="product-item-description">
        <span style={{ paddingRight: "3px" }}>{data.name}</span>
        {data.short_description}
        <br />
        <span>
          {data.currency}.{data.price}
        </span>
      </p>
    </div>
  );
}
