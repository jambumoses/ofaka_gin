import React from "react";
import Sponsors from "../components/Sponsors";

export default function Footer() {
  return (
    <footer>
      {/* <!-- supposors --> */}
      <Sponsors data={""} />

      {/* <!-- 40 % and recycle and bin --> */}
      <div className="footer-percentage-section">
        <span className="footer-percentage-num">
          40% <small>abv</small>
        </span>
        <span className="footer-percentage-heading">flavoured gin</span>
        <span className="footer-percentage-icons-section">
          <span className="footer-percentage-icons-recycle">
            <img src={require("../assets/img/no_bg/recycle.png")} alt="" />
          </span>
          <span className="footer-percentage-icons-bin">
            <img src={require("../assets/img/no_bg/bin2.png")} alt="" />
          </span>
        </span>
      </div>

      {/* <!-- footer shortcuts --> */}
      <section className="footer-shot">
        <div className="footer-left-logo">
          <span>
            <img src={require("../assets/img/no_bg/logo2.png")} alt="" />
          </span>
        </div>

        <div className="footer-shortcut">
          <div className="footer-shortcut-container">
            <h4>quick navigation</h4>
            <div className="footer-shortcut-list">
              <span>
                <a href="./index.html">home</a>
              </span>
              <span>
                <a href="./about.html">about us</a>
              </span>
              <span>
                <a href="./products.html">products</a>
              </span>
              <span>
                <a href="./contact.html">contact us</a>
              </span>
            </div>
          </div>

          <div className="footer-shortcut-container">
            <h4>blended and packed</h4>
            <div className="footer-shortcut-list">
              <span>
                <a href="">home</a>
              </span>
              <span>
                <a href="">contact us</a>
              </span>
              <span>
                <a href="">about us</a>
              </span>
              <span>
                <a href="">products</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- packed by --> */}

      <div className="footer-addressing-section">
        <div className="footer-addressing-details-section">
          <h4>blended and packed by offaka distillers LTD</h4>
          <div className="footer-addressing-details-left">
            <span>
              <i className="fa fa-location"></i>
              <a href="">Address Plot 45, Block 159, Lagazi</a>
            </span>
            <span>
              <i className="fa fa-box"></i>
              <a href=""> P.O BOX 34, sagazi Uganda </a>
            </span>
            <span>
              <i className="fa fa-envelope"></i>
              <a href="">offaka233@gmail.com</a>
            </span>
          </div>

          <div className="footer-addressing-details-right">
            <span>
              <i className="fab fa-twitter"></i>
              <a href="https://www.twitter.com/@ofakaug">@ofakaug</a>
            </span>
            <span>
              <i className="fab fa-facebook"></i>
              <a href="https://www.facebook.com/@ofaka_gin">@ofaka_gin</a>
            </span>
            <span>
              <i className="fab fa-instagram"></i>
              <a href="https://www.instagram.com/@ofaka_gin">@ofaka_gin</a>
            </span>
          </div>
        </div>
      </div>

      {/* <!-- footer nav --> */}
      <nav>
        <div className="footer-nav-unbs">
          <img
            src={require("../assets/img/no_bg/unbs-removebg-preview.png")}
            alt=""
          />{" "}
          <span>UNBS</span>
        </div>
        <div className="footer-nav-middle">
          <span>
            <a href="">term of use</a>{" "}
          </span>
          <span> © copyright 2023 all right reversed </span>
          <span>
            <a href="">policies </a>
          </span>
        </div>
        <div className="footer-nav-18-plus">
          <img
            src={require("../assets/img/no_bg/download__2_-removebg-preview.png")}
            alt=""
          />
        </div>
      </nav>
    </footer>
  );
}
