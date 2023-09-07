import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { constantActions } from "../store/constantSlice";
import { useDispatch } from "react-redux";
import SwiperSlider from "../components/SwiperSlider";

export default function About() {
  const dispatch = useDispatch();
  dispatch(constantActions.updateCurrentPage("about"));

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <main className="about-section">
      {/*       <span class="left-side-banner">
        <img
        src={require("../assets/img/no_bg/WEB IMG/uganda-flag-vector-illustration-on-a-white-background-RADDH2 copy.png")}
        alt=""
        />
      </span> */}
      <section class="about-banner ">
        {/* <SwiperSlider /> */}
        {/* scroll images */}

        {/* <!-- <img src="./img/no_bg/WEB IMG/about.png" alt=""> --> */}

        {/* working */}
        {/*         <div class="about-poster">
          <img
            src={require("../assets/img/no_bg/WEB IMG/rum bottle sasmple 02 copy.png")}
            alt=""
          />
        </div>
        <div class="about-logo">
          <img
            src={require("../assets/img/no_bg/WEB IMG/bottle 02.JPG")}
            alt=""
          />
        </div> */}
      </section>
      <span data-aos="fade-left" class="right-side-banner">
        <img
          src={require("../assets/img/no_bg/WEB IMG/istockphoto-482292024-612x612 copy.png")}
          alt=""
        />
      </span>

      <section class="des-1">
        <div>
          <p data-aos="fade-up">
            To bring value to our stakeholders with our high-quality liquor
            brands and memorable experiences
          </p>
          <p data-aos="fade-up">
            To be the leading alcohol company that sets high standards for
            responsible business and industry so as;
          </p>
          <p data-aos="fade-up">
            To emerge as the most celebrated liquor manufacturing, distillation
            and bottling sector company in Uganda as well as the world over.
          </p>
          <p data-aos="fade-up">
            Customers are at the Centre-front of our core purpose of doing
            business and as such our survival is solely hinged on relations with
            customers. We aspire to treat our stakeholders and customers with
            dignity, respect and patience, provide honesty, transparency,
            humility and integrity.
          </p>
        </div>

        <ul>
          <li data-aos="fade-up">To be creative and innovative</li>
          <li data-aos="fade-up">To deliver excellence</li>
          <li data-aos="fade-up">To cultivate an entrepreneurial spirit</li>
          <li data-aos="fade-up">
            To make possible ways of self-realization for employees
          </li>
          <li data-aos="fade-up">
            Maintaining a high standard of professionalism, fairness and total
            customer contentment in all deals
          </li>
          <li data-aos="fade-up">
            Delighting our clients through commitment and sincerity
          </li>
          <li data-aos="fade-up">
            Working towards keeping our environment clean and promoting
            responsible imbibe
          </li>
        </ul>
      </section>

      <section data-aos="fade-up" class="des-2">
        <small>
          Offaka distillers Ltd was established in 2022 and is fully registered
          and certified by Uganda registration service bureau (URSB) We deal in
          manufacturing, distillation, blending and packaging of good quality
          gin, whisky and liquor certified and approved by Uganda national
          bureau of standards (UNBS).
        </small>

        <p data-aos="fade-up">
          We are located in sagazi, Lugazi municipality, Buikwe district with
          our headquarters in sagazi, plot 45, block 159, P. O. Box 34 Lugazi
        </p>
      </section>

      <section class="des-3">
        <h1 data-aos="fade-up">our Purpose</h1>
        <p data-aos="fade-up">
          To bring value to our stakeholders with our high-quality liquor brands
          and memorable experiences. To be the leading alcohol company that sets
          high standards for responsible business and the industry.
        </p>
      </section>

      <section data-aos="fade-up" class="des-4">
        <small>Offaka Distillers Ltd produces </small>
        <p>
          OFAKA FLAVOURED GIN AND THE COUNSELOR GIN. We offer the best flavoured
          Gin on the local market. Our flavors are imported from the most
          renowned laboratory in Shanghai, China which are perfectly blended
          with our local market best triple distilled extra neutral alcohol
          manufacturer in sugar corporation of Uganda limited.
        </p>
      </section>

      <section data-aos="fade-up" class="des-5">
        The Counselor is a premium Gin is inspired from some of the best flavors
        and ingredients from around East Africa. We endeavored to expand the
        flavor profile of our Gin far beyond the realms of traditional
        botanicals. From the rich juniper notes, mint, green tea, grapes,
        cinnamon to our own Ugandan mondain, whytei roots, matooke, blood
        oranges, rosemary, cardimon pods, coriander seeds, lemon, black
        peppercorn and ginger, we take the very best of East Africa’s
        ingredients and combine them to create this gin like no other.
      </section>

      <p data-aos="fade-up" class="des-6">
        We inherited the Ugandan tradition of Gin making and improved it to fit
        the world standards. The Counselor is uniquely packaged in ways to bring
        back the old classic and military noble feeling to our customers.
      </p>

      <section class="des-7">
        <div>
          <h1 data-aos="fade-right">target</h1>
          <p data-aos="fade-up">
            Our target is young professionals between the ages of 25 – 40 who
            are looking to indulge in a high quality, local product.
          </p>
        </div>
        <section data-aos="fade-up">
          With our innovative product and our targeted marketing approach we
          believe that our products have the potential to quickly became a
          dominate player within the alcoholic beverage market in Uganda.
        </section>
      </section>

      <span data-aos="fade-up" class="des-img">
        <img
          src={require("../assets/img/no_bg/WEB IMG/depositphotos_35468603-stock-illustration-dancing-woman-in-ethnic-style copytttt.png")}
          alt=""
        />
      </span>
    </main>
  );
}
