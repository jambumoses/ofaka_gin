import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { constantActions } from "../store/constantSlice";

export default function Home() {

  const dispatch = useDispatch();
  dispatch(constantActions.updateCurrentPage("home"));

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <main className="home">
      <section className="home-banner">banner</section>

      {/* <!-- note --> */}
      <p className="home-banner-note">
        Our focus is to craft the best spirits category which are seen strong
        growth over the last several years.
      </p>

      <section data-aos="fade-up" className="home-des-1">
        <p>
          <span>ofaka flavoured gin</span> and the counselor gin fill the gap
          within this trend by offering our unique delicious and refreshing
          option for customers who are looking for a trend of the best drinking
          experience.
        </p>
      </section>

      <section data-aos="fade-up" className="home-des-2">
        Our product features locally sourced ingredients and unique flavor
        combinations that appeal to the growing demographic of conscious
        consumers who are prioritizing sustainability and natural ingredients in
        the purchasing decisions.
      </section>

      {/* <!-- samples --> */}
      <section data-aos="fade-up" className="product-samples">
        <div className="product-sample-item">
          <span>
            <img
              src={require("../assets/img/no_bg/WEB IMG/rum bottle sasmple 02.JPG")}
              alt=""
            />
          </span>
          <p >
            <small className="product-sample-item-title">counselor</small>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            placeat unde labore, eveniet voluptatum perspiciatis, amet, cumque
            molestias earum veritatis obcaecati quos cupiditate libero soluta in
            similique iste dolorem accusantium?
            <a href="#" className="product-sample-item-btn">
              order
            </a>
          </p>
        </div>
      </section>

      <section className="home-des-3">
        <h1 data-aos="fade-left">what we do</h1>
        <p data-aos="fade-up" className="des-3-1">
          We look forward to capitalizing on this opportunity and capturing the
          attention of consumers looking for a unique and high-quality drinking
          experience
        </p>
        <p data-aos="fade-up" className="des-3-2">
          Our solution is to create unique and premium Gins that will cater for
          a broader market segment. We are producing a line of high-quality,
          hand-crafted Gins that are made from organic and natural ingredients.
          Our aim is to offer a product that is not readily available on the
          local market hence making us standout from our competitors.
        </p>
        <p data-aos="fade-up" className="des-3-3">
          Our team is composed of experienced mixologists who have a vast
          knowledge of the different flavors and ingredients that produce the
          perfect blend. We source our flavors from one of the best laboratories
          in China Shanghai and our ingredients from local farmers making sure
          that our gin is purely Ugandan and sustainable.
        </p>
      </section>

      <section data-aos="fade-up" className="home-des-4">
        <h1>Competition</h1>
        <small>In an ever-growing market our competition is fierce. </small>
      </section>

      {/* <!-- samples --> */}
      <section data-aos="fade-up" className="product-samples">
        <div className="product-sample-item product-sample-item-reverse">
          <span>
            <img
              src={require("../assets/img/no_bg/WEB IMG/rum bottle sasmple 02.JPG")}
              alt=""
            />
          </span>
          <p>
            <small className="product-sample-item-title">counselor</small>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            placeat unde labore, eveniet voluptatum perspiciatis, amet, cumque
            molestias earum veritatis obcaecati quos cupiditate libero soluta in
            similique iste dolorem accusantium?
            <a href="#" className="product-sample-item-btn">
              order
            </a>
          </p>
        </div>
      </section>

      <p data-aos="fade-up" className="home-des-5">
        Offaka distiller was established in May 2022, it started production and
        distribution of it product ofaka flavoured gin in December 2022 and
        managed to make production of 20000 bottles and make sales of 24millions
        within three months and as per now we are in the process of producing
        40000 bottles in our next target production.
      </p>

      {/* <!-- symbols --> */}
      <section className="home-drink-symbols">
        <span data-aos="fade-up">
          <img
            src={require("../assets/img/no_bg/WEB IMG/images (4) copy.png")}
            alt=""
          />
        </span>
        <span data-aos="fade-up">
          <img
            src={require("../assets/img/no_bg/WEB IMG/images (3) copy.png")}
            alt=""
          />
        </span>
        <span data-aos="fade-up">
          <img
            src={require("../assets/img/no_bg/WEB IMG/images (5) copyff.png")}
            alt=""
          />
        </span>
      </section>
    </main>
  );
}
