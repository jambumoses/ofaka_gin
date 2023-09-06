import React from "react";

export default function Sponsors({ data }) {
  return (
    <>
      <div className="footer-sponsors-section">
        <h3>supposors</h3>
        <div className="footer-sponsors-container">
          <div className="footer-sponsors-holding">
            {/* part 1 */}
            <section className="footer-sponsors-move">
              <span>
                <img src="" alt="" />
              </span>
              <span>
                <img src="" alt="" />
              </span>
              <span>
                <img src="" alt="" />
              </span>
              <span>
                <img src="" alt="" />
              </span>
            </section>

            {/* part 2 */}
            <section className="footer-sponsors-move">
              <span>
                <img src="" alt="" />
              </span>
              <span>
                <img src="" alt="" />
              </span>
              <span>
                <img src="" alt="" />
              </span>
              <span>
                <img src="" alt="" />
              </span>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
