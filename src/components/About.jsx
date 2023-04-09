import React, { Component } from 'react';



 class About extends Component {
  render() {
    return (
      <>
        <div className="about-con">
          <div id="about" className="catering row mt-5 pt-5">
            <div className="col-12 col-sm-12 col-md-6">
              <div className=" ms-5   d-lg-block d-sm-none  d-none  d-flex align-items-center justify-content-center ">
                <img
                  className="tableImg"
                  src="https://www.w3schools.com/w3images/tablesetting2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-6 d-md-flex align-items-center justify-content-center  ">
              <div className=" ms-5  mt-3 me-5  w-60  ">
                <h5
                  style={{
                    fontSize: 36,
                    letterSpacing: 5,
                    fontWeight: 500,
                    marginBottom: 40,
                  }}
                >
                  About Catering
                </h5>
                <p
                  className="minihead"
                  style={{ fontSize: 18, fontWeight: 400, letterSpacing: 5 }}
                >
                  Tradition since 1889
                </p>
                <p style={{ fontSize: 18, lineHeight: 1.5 }}>
                  The Catering was founded in blabla by Mr. Smith in lorem ipsum
                  dolor sit amet, consectetur adipiscing elit consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute iruredolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.We only use{" "}
                  <span> seasonal</span> ingredients.
                </p>
                <p style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.8 }}>
                  <p className="opr" style={{ fontSize: 18, lineHeight: 1.5 }}>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                    consectetur adipiscing elit, sed do eiusmod temporincididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat..
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ margin: 100, color: "gray" }} />
      </>
    );
  }
}

export default About;