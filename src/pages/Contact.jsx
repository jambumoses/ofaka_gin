import React from "react";
import { useDispatch } from "react-redux";
import { constantActions } from "../store/constantSlice";

export default function Contact() {
  const dispatch = useDispatch();
  dispatch(constantActions.updateCurrentPage("contact"));

  return (
    <main className="contact-section">
      <section className="contact-map-section">
        
        <iframe id="gmap_canvas" src="" ></iframe>
      </section>

      
      <span className="arrowing-anime">
        <i
          style={{ fontSize: "20px", color: "rgb(71, 71, 50)" }}
          className="fa fa-arrow-down"
        ></i>
      </span>

      <section className="contact-sendmail-section">
        <h3>email us:</h3>
        <form action="" method="post">
          <span className="standard-input">
            <input
              type="email"
              name=""
              id=""
              name="email"
              placeholder="Enter Email"
            />
          </span>
          <span className="standard-input">
            <input
              type="text"
              name=""
              id=""
              name="subject"
              placeholder="Enter Subject"
            />
          </span>
          <span className="message-input">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              name="message"
              placeholder="Enter Message Here"
            ></textarea>
          </span>
          <span className="email-us-btn">
            <input type="submit" value="send" />
          </span>
        </form>
      </section>

      <section className="contact-social">
        <a href="" style={{ margin: "0px 10px" }}>
          <i style={{ fontSize: "17px" }} className="fab fa-twitter"></i>
        </a>
        <a href="" style={{ margin: "0px 10px" }}>
          <i style={{ fontSize: "17px" }} className="fab fa-facebook"></i>
        </a>
        <a href="" style={{ margin: "0px 10px" }}>
          <i style={{ fontSize: "17px" }} className="fab fa-instagram"></i>
        </a>
        <a href="" style={{ margin: "0px 10px" }}>
          <i style={{ fontSize: "17px" }} className="fab fa-linkedin"></i>
        </a>
      </section>

      <section className="mails_tel">
        <div>
          <h5>phone</h5>
          <span>077-565-6512</span>
        </div>

        <div>
          <h5>call us</h5>
          <span>offaka233@gmail.com</span>
        </div>

        <div>
          <h5>address</h5>
          <span>Address Plot 45, Block 159, Lagazi</span>
        </div>

        <div>
          <h5>box-No</h5>
          <span>P.O BOX 34, sagazi Uganda</span>
        </div>
      </section>

      <section className="contact-barcode">
        <span>
          <img
            src={require("../assets/img/no_bg/WEB IMG/0769503611594.jpg")}
            alt=""
          />
        </span>
        <h3>barcode</h3>
      </section>
    </main>
  );
}
