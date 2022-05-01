import React from "react";
import "assets/frontpage/frontpage-main.scss";
import logo from "assets/images/logo.svg";
import HomeIcon from "assets/images/home-icon.svg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="relative font-frontpage-global">
      <div className="box-banner bg-no-repeat bg-right-top flex absolute left-0 top-0 w-full">
        <div className="header flex text-white items-center justify-center absolute right-0 top-0">
          <div className="item">
            <span className="item__text">EN</span>
          </div>
          <div className="item">
            <span className="item__text">Company</span>
          </div>
          <div className="item">
            <span className="item__text">Partner Market Place</span>
          </div>
        </div>
      </div>
      <div className="kairos-container relative flex mx-auto">
        <div className="col-left">
          <div className="flex justify-between items-center">
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
          <div className="banner-slogan">
            Asia IT <br /> Market Place
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
        </div>
      </div>
    </div>
  );
}

export default Home;
