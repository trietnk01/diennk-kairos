import React from "react";
import "assets/frontpage/frontpage-main.scss";
import logo from "assets/images/logo.svg";
import HomeIcon from "assets/images/home-icon.svg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="font-frontpage-global">
      <div className="relative banner">
        <div className="box-banner flex mx-auto justify-end h-full">
          <div className="header-right"></div>
        </div>
        <div className="absolute w-full top-0 left-0 z-30">
          <div className="box-banner flex justify-end mx-auto">
            <div className="header-top flex justify-center items-center">
              <div className="header-top-item">
                <Link className="header-top-item__text text-white" to="/">
                  EN
                </Link>
              </div>
              <div className="header-top-item">
                <Link className="header-top-item__text text-white" to="/">
                  Company
                </Link>
              </div>
              <div className="header-top-item">
                <Link className="header-top-item__text text-white" to="/">
                  Partner Market Place
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-10 w-full h-full flex justify-center">
          <div className="kairos-container flex items-center">
            <div className="banner-slogan" style={{ width: "484px" }}>
              Asia IT
              <br />
              Market Place
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="kairos-container flex mx-auto">
            <div className="col-left relative">
              <div className="flex relative justify-between items-center">
                <Link to="/">
                  <img src={logo} />
                </Link>
                <div className="flex" style={{ columnGap: "10px" }}>
                  <img src={HomeIcon} />
                  <Link to="/" className="front-page-text-home">
                    Home
                  </Link>
                </div>
              </div>
            </div>
            <div className="grow banner-menu">
              <ul className="menu">
                <li className="inline-block">
                  <Link className="text-white" to="/">
                    Auto Homepage
                  </Link>
                </li>
                <li className="inline-block">
                  <Link className="text-white" to="/">
                    Sales
                  </Link>
                </li>
                <li className="inline-block">
                  <Link className="text-white" to="/">
                    CRM
                  </Link>
                </li>
                <li className="inline-block">
                  <Link className="text-white" to="/">
                    Eletronic office
                  </Link>
                </li>
                <li className="inline-block">
                  <Link className="text-white" to="/">
                    Cloud ERP
                  </Link>
                </li>
                <li className="inline-block">
                  <Link className="text-white" to="/">
                    SSL
                  </Link>
                </li>
              </ul>
              <ul className="tab-now-future text-center">
                <li className="inline-block">
                  <button type="button" className="text-white active">
                    Now
                  </button>
                </li>
                <li className="inline-block">
                  <button type="button" className="text-white">
                    Future
                  </button>
                </li>
              </ul>
              <div className="now-future-panel flex justify-center">
                <div className="now-future-item">
                  <div className="now-future-item__number text-center">6</div>
                  <div className="now-future-item__text text-white text-center">
                    different
                    <br />
                    IT Software
                    <br />
                    Networks
                  </div>
                </div>
                <div className="now-future-item">
                  <div className="now-future-item__number text-center">32</div>
                  <div className="now-future-item__text text-white text-center">partners</div>
                </div>
                <div className="now-future-item">
                  <div className="now-future-item__number text-center">4</div>
                  <div className="now-future-item__text text-white text-center">countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
