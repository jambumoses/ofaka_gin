import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "../store/constantSlice";
import { Navigate, useParams, useSearchParams } from "react-router-dom";

export default function Details() {
  const allData = useSelector((state) => state.constant.data.products);
  const data = useSelector((state) => state.constant.data.products)[0];

  const dispatch = useDispatch();
  dispatch(constantActions.updateCurrentPage("details"));

  const [mainImage, setMainImage] = useState(data.images[0].src);

  const [params] = useSearchParams();

  allData.forEach((item) => {
    if (params.get("product") === item._id) {
      params.set('product',item._id)
    }
  });

  /* 
  const [verifyID, setVerifyID] = useState(true);

  useEffect(() => {
    allData.forEach((item) => {
      if (params.get("product") === item._id) {
        setVerifyID(true);
      }

      if (params.get("product") !== item._id) {
        setVerifyID(false);
      }
    });
  }, []); */

  //setVerifyID(VerifyProduct());

  return (
    <>
      {params.get("product") === "" && (
        <Navigate to="/products" replace={false} />
      )}

      {/* verifyID && */ allData.includes(data) && params.get("product") !== "" ? (
        <main className="details-section">
          <section className="details-image-section">
            {/* <!-- image list --> */}
            <div className="details-images">
              <div className="details-imagelist-section">
                {data.images.map(function (img) {
                  return (
                    <span key={img._id} onClick={() => setMainImage(img.src)}>
                      <img
                        src={require("../assets/img/" + img.src)}
                        alt={img.alt}
                      />
                    </span>
                  );
                })}
              </div>
              {/* <!-- main image --> */}
              <div className="details-main-image-section">
                <img
                  src={require("../assets/img/" + mainImage)} // main image
                  alt=""
                />
              </div>
            </div>
            {/* <!-- details --> */}
            <div className="details-image-details-section">
              <small className="details-image-details-top-rated">
                <i
                  className="fa fa-star"
                  style={{
                    fontSize: "30px",
                    color: "gold",
                    transform: "rotateZ(30deg)",
                  }}
                ></i>
              </small>
              <span>
                name: <small>{data.name}</small>
              </span>
              <span>
                color: <small>{data.color}</small>
              </span>
              <span>
                price:{" "}
                <small>
                  {data.currency}.{data.price}
                </small>
              </span>
              <span>
                company: <small>{data.company}</small>
              </span>
              <span>
                percentage: <small>{data.percentage} %</small>
              </span>
              <span>
                rating:
                <small>
                  <i
                    className="fa fa-star"
                    style={{ color: data.rating >= 1 ? "orange" : null }}
                  ></i>
                  <i
                    className="fa fa-star"
                    style={{ color: data.rating >= 2 ? "orange" : null }}
                  ></i>
                  <i
                    className="fa fa-star"
                    style={{ color: data.rating >= 3 ? "orange" : null }}
                  ></i>
                  <i
                    className="fa fa-star"
                    style={{ color: data.rating >= 4 ? "orange" : null }}
                  ></i>
                </small>
              </span>
              <div className="details-image-details-short-description">
                <h3>short description</h3>
                <p>{data.short_description}</p>
              </div>

              <div className="details-image-details-buttons">
                <button
                  className="details-image-details-buttons-cart"
                  type="button"
                >
                  <i
                    className="fa fa-shopping-bag"
                    style={{ marginRight: "5px" }}
                  ></i>{" "}
                  add to cart
                </button>
                <button
                  className="details-image-details-buttons-wishlist"
                  type="button"
                >
                  <i className="fa fa-heart" style={{ marginRight: "5px" }}></i>{" "}
                  wishlist
                </button>
              </div>
            </div>
          </section>

          {/* <!-- description --> */}
          <p className="details-description">{data.description}</p>

          {/* <!-- reviews --> */}
          <section className="details-reviews-section">
            <h3>reviews</h3>

            <div className="details-reviews-sect">
              {data.reviews.map(function (review) {
                return (
                  <div key={review._id} className="details-reviews-container">
                    <span className="details-reviews-thumbnail">
                      <img
                        src={require("../assets/img/no_bg/" +
                          review.profile_image)}
                        alt=""
                      />
                    </span>
                    <span className="details-reviews-rates">
                      <i
                        className="fa fa-star"
                        style={{ color: data.rating >= 1 ? "orange" : null }}
                      ></i>
                      <i
                        className="fa fa-star"
                        style={{ color: data.rating >= 2 ? "orange" : null }}
                      ></i>
                      <i
                        className="fa fa-star"
                        style={{ color: data.rating >= 3 ? "orange" : null }}
                      ></i>
                      <i
                        className="fa fa-star"
                        style={{ color: data.rating >= 4 ? "orange" : null }}
                      ></i>
                    </span>
                    <h3>{review.name}</h3>
                    <p>{review.comment}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="details-related-section">
            <h3>related products</h3>

            <div className="details-related-container">
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
                <a className="product-item-get" href="">
                  {" "}
                  get{" "}
                </a>
                <span className="product-item-thumbnail">
                  <img
                    src={require("../assets/img/jocelyn-morales-pXyNqLpNqAU-unsplash-removebg-preview.png")}
                    alt=""
                  />
                </span>
                <p className="product-item-description">
                  <span style={{ paddingRight: "3px" }}>red wine</span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quod, neque natus! Eum corrupti praesentium iste neque non
                  minus, inventore voluptates
                  <br />
                  <span>shs.15,00</span>
                </p>
              </div>

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
                <a className="product-item-get" href="">
                  {" "}
                  get{" "}
                </a>
                <span className="product-item-thumbnail">
                  <img
                    src={require("../assets/img/jocelyn-morales-pXyNqLpNqAU-unsplash-removebg-preview.png")}
                    alt=""
                  />
                </span>
                <p className="product-item-description">
                  <span style={{ paddingRight: "3px" }}>red wine</span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quod, neque natus! Eum corrupti praesentium iste neque non
                  minus, inventore voluptates
                  <br />
                  <span>shs.15,00</span>
                </p>
              </div>

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
                <a className="product-item-get" href="">
                  {" "}
                  get{" "}
                </a>
                <span className="product-item-thumbnail">
                  <img
                    src={require("../assets/img/jocelyn-morales-pXyNqLpNqAU-unsplash-removebg-preview.png")}
                    alt=""
                  />
                </span>
                <p className="product-item-description">
                  <span style={{ paddingRight: "3px" }}>red wine</span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quod, neque natus! Eum corrupti praesentium iste neque non
                  minus, inventore voluptates
                  <br />
                  <span>shs.15,00</span>
                </p>
              </div>
              {/* <!-- end --> */}
            </div>
          </section>
        </main>
      ) : (
        <Navigate to="/products" replace={false} />
      )}
    </>
  );
}
