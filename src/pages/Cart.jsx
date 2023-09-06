import React from "react";
import { useDispatch } from "react-redux";
import { constantActions } from "../store/constantSlice";

export default function Cart() {

  const dispatch = useDispatch();
  dispatch(constantActions.updateCurrentPage("cart"));

  return (
    <main className="details-section">
      <section className="cart-item-section">
        <section className="details-image-section cart-item-container">
          {/* <!-- image list --> */}
          <div className="details-images cart-image-container">
            <div className="details-imagelist-section cart-img-list">
              <span>
                <img
                  src={require("../assets/img/gabriele-garanzelli-yqAk8NyqN3Y-unsplash-removebg-preview.png")}
                  alt=""
                />
              </span>
              <span>
                <img
                  src={require("../assets/img/j-mckinney-zIo9Fbh8qJc-unsplash-removebg-preview.png")}
                  alt=""
                />
              </span>
              <span>
                <img
                  src={require("../assets/img/jocelyn-morales-pXyNqLpNqAU-unsplash-removebg-preview.png")}
                  alt=""
                />
              </span>
            </div>
            {/* <!-- main image --> */}
            <div className="details-main-image-section cart-main-image">
              {/* <!-- count --> */}
              <span className="cart-main-image-item-count">12</span>
              {/* <!-- quantity component --> */}
              <span className="cart-main-image-item-quantity-container">
                <span className="cart-main-image-item-quantity-minus">
                  <i
                    style={{ fontSize: "15px", cursor: "pointer" }}
                    className="fa fa-minus"
                  ></i>
                </span>
                <span className="cart-main-image-item-quantity-number">20</span>
                <span className="cart-main-image-item-quantity-add">
                  <i
                    style={{ fontSize: "15px", cursor: "pointer" }}
                    className="fa fa-add"
                  ></i>
                </span>
              </span>
              {/* <!-- wishlist btn --> */}
              <button
                className="details-image-details-buttons-wishlist cart-wish-btn"
                type="button"
              >
                <i className="fa fa-heart" style={{ marginRight: "5px" }}></i>{" "}
                wishlist
              </button>
              {/* <!-- img --> */}
              <img
                src={require("../assets/img/jocelyn-morales-pXyNqLpNqAU-unsplash-removebg-preview.png")}
                alt=""
              />
              <div className="cart-item-detail">
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
                  name: <small>Royal Gin</small>
                </span>
                <span>
                  color: <small>colourless</small>
                </span>
                <span>
                  price: <small>shs.15,000</small>
                </span>
                <span>
                  company: <small>Ofaka Flavoured Gin</small>
                </span>
                <span>
                  percentage: <small>40 %</small>
                </span>
                <span>
                  rating:
                  <small>
                    <i className="fa fa-star" style={{ color: "orange" }}></i>
                    <i className="fa fa-star" style={{ color: "orange" }}></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </small>
                </span>
                <div className="details-image-details-short-description">
                  <h3>short description</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus at maiores magnam repudiandae aliquam nesciunt
                    iure dicta quas sed, eos amet tempore necessitatibus. Quasi
                    cupiditate id dolorem quidem, eveniet ad.
                  </p>
                </div>

                <div className="details-image-details-buttons">
                  <span>
                    subtotal: <small>shs. 15,000</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- finial details  --> */}
        <section className="cart-final-details-container">
          <h3>summary</h3>
          <span>
            items: <small>40</small>
          </span>
          <span>
            subtotal: <small>shs. 250,000</small>
          </span>
          <span>
            PAYE fee: <small>shs. 0</small>
          </span>
          <span>
            shipping fee: <small>shs. 10,000</small>
          </span>
          <span>
            total: <small>shs. 300,000</small>
          </span>
        </section>
      </section>

      {/* <!-- cart note --> */}
      <div className="cart-note-section">
        <span className="cart-note-section-note">
          <h4>note.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            similique, architecto veritatis ullam iusto voluptas hic possimus
            fugiat accusamus molestiae cupiditate consequuntur aut nesciunt
            quasi atque neque quae? Exercitationem, iusto.
          </p>
        </span>
      </div>

      <section className="details-related-section">
        <h3>also try out these trends</h3>

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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
              neque natus! Eum corrupti praesentium iste neque non minus,
              inventore voluptates
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
              neque natus! Eum corrupti praesentium iste neque non minus,
              inventore voluptates
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
              neque natus! Eum corrupti praesentium iste neque non minus,
              inventore voluptates
              <br />
              <span>shs.15,00</span>
            </p>
          </div>
          {/* <!-- end --> */}
        </div>
      </section>
    </main>
  );
}
