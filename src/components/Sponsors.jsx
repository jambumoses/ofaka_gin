import React from "react";
import { useSelector } from "react-redux";

export default function Sponsors({ data }) {
  const sponsors = useSelector((state) => state.constant.data.sponsors);

  return (
    <>
      <div className="footer-sponsors-section">
        <h3>supposors</h3>
        <div className="footer-sponsors-container">
          <div className="footer-sponsors-holding">
            {sponsors.map(function (item) {
              return (
                <section key={item._id} className="footer-sponsors-move">
                  {item.map(function (sponsor) {
                    return (
                      <span key={sponsor._id}>
                        <img src={require("../assets/img/no_bg/sponsors/"+sponsor.img)} alt={sponsor.title} />
                      </span>
                    );
                  })}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
