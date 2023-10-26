import React, { Fragment } from "react";

import Footer from "./footer/Footer";

function Home() {
  return (
    <Fragment>
      <main className="">
        <section className="HomePage">
          <section className="HomePageVision">
            <div className="HomePageCard1">
              <div className="HomePageCardTitle">
                <div className="HomePageCardTitleLine"></div>
                <div className="HomePageCardTitleText">
                  <div className="HomePageCardTitleHello">Hello! Everyone!</div>
                  <div className="HomePageCardTitleName">
                    My Name is <span className="HomePageCardTitleNameV">V</span>
                    ince.
                  </div>
                </div>
              </div>
              <div className="HomePageCardContext">
                I am looking for a position as a Front-end engineer.
                <br />
                Contact me here vince.guo24@gmail.com
              </div>
            </div>
            <div className="HomePageCard2">
              <div className="HomePageCardTitle">
                <div className="HomePageCardTitleLine"></div>
                <div className="HomePageCardTitleText">
                  <div className="HomePageCardTitleHello">Hello! Everyone!</div>
                  <div className="HomePageCardTitleName">
                    My Name is <span className="HomePageCardTitleNameV">V</span>
                    ince.
                  </div>
                </div>
              </div>
              <div className="HomePageCardContext">
                I am looking for a position as a Front-end engineer.
                <br />
                Contact me here vince.guo24@gmail.com
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
}

export default Home;
