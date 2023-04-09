import React, { Component } from 'react';


 class Menu extends Component {
  render() {
    return (
      <>
        <div id="ourmenu" className="row mt-5 ">
          <div className=" col-md-12 col-sm-12 col-lg-6 d-md-flex d-sm-flex align-items-center justify-content-center ">
            <div className="ms-3 ms-lg-0 ms-sm-0 ps-lg-5 w-60 ">
              <h5
                style={{
                  fontSize: 36,
                  letterSpacing: 5,
                  fontWeight: 500,
                  marginBottom: 60,
                }}
              >
                Our Menu
              </h5>
              <p
                className="head"
                style={{ fontSize: 20, fontWeight: 400, letterSpacing: 3 }}
              >
                Bread Basket
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "gray" }}>
                Assortment of fresh baked fruit breads and muffins 5.50
              </p>
              <p
                className="head"
                style={{ fontSize: 20, fontWeight: 400, letterSpacing: 3 }}
              >
                Honey Almond Granola with Fruits
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "gray" }}>
                Natural cereal of honey toasted oats, raisins, almonds and dates
                7.00
              </p>

              <p
                className="head"
                style={{ fontSize: 20, fontWeight: 400, letterSpacing: 3 }}
              >
                Belgian Waffle
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "gray" }}>
                Vanilla flavored batter with malted flour 7.50
              </p>

              <p
                className="head"
                style={{ fontSize: 20, fontWeight: 400, letterSpacing: 3 }}
              >
                Scrambled eggs
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "gray" }}>
                Scrambled eggs, roasted red pepper and garlic, with green onions
                7.50
              </p>

              <p
                className="head"
                style={{ fontSize: 20, fontWeight: 400, letterSpacing: 3 }}
              >
                Blueberry Pancakes
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "gray" }}>
                With syrup, butter and lots of berries 8.50
              </p>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 d-sm-flex d-md-flex align-items-center justify-content-center ">
            <div className=" ">
              <img
                className="menu"
                src="https://www.w3schools.com/w3images/tablesetting.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr style={{ margin: 100, color: "gray" }} />
      </>
    );
  }
}

export default Menu