import React from "react";
import { useDispatch } from "react-redux";
import { constantActions } from "../store/constantSlice";

export default function Details() {

  const dispatch = useDispatch();
  dispatch(constantActions.updateCurrentPage("details"));

  return (
    <main className="details-section">
      <section className="details-image-section">
        {/* <!-- image list --> */}
        <div className="details-images">
          <div className="details-imagelist-section">
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
          <div className="details-main-image-section">
            <img
              src={require("../assets/img/gabriele-garanzelli-yqAk8NyqN3Y-unsplash-removebg-preview.png")}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              at maiores magnam repudiandae aliquam nesciunt iure dicta quas
              sed, eos amet tempore necessitatibus. Quasi cupiditate id dolorem
              quidem, eveniet ad.
            </p>
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
      <p className="details-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
        similique, architecto veritatis ullam iusto voluptas hic possimus fugiat
        accusamus molestiae cupiditate consequuntur aut nesciunt quasi atque
        neque quae? Exercitationem, iusto.
      </p>

      {/* <!-- reviews --> */}
      <section className="details-reviews-section">
        <h3>reviews</h3>

        <div className="details-reviews-sect">
          <div className="details-reviews-container">
            <span className="details-reviews-thumbnail">
              <img src="" alt="" />
            </span>
            <span className="details-reviews-rates">
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
            <h3>jambu moses</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              consectetur adipisci, recusandae eveniet similique dolores sunt et
              saepe, vel non veniam sequi natus tempora asperiores officia
              magnam reprehenderit harum voluptate!
            </p>
          </div>

          <div className="details-reviews-container">
            <span className="details-reviews-thumbnail">
              <img src="" alt="" />
            </span>

            <span className="details-reviews-rates">
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
            <h3>jambu moses</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              consectetur adipisci, recusandae eveniet similique dolores sunt et
              saepe, vel non veniam sequi natus tempora asperiores officia
              magnam reprehenderit harum voluptate!
            </p>
          </div>

          <div className="details-reviews-container">
            <span className="details-reviews-thumbnail">
              <img src="" alt="" />
            </span>

            <span className="details-reviews-rates">
              <i className="fa fa-star" style={{color: "orange"}}></i>
              <i className="fa fa-star" style={{color: "orange"}}></i>
              <i className="fa fa-star" style={{color: "orange"}}></i>
              <i className="fa fa-star"></i>
            </span>
            <h3>jambu moses</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              consectetur adipisci, recusandae eveniet similique dolores sunt et
              saepe, vel non veniam sequi natus tempora asperiores officia
              magnam reprehenderit harum voluptate!
            </p>
          </div>
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
