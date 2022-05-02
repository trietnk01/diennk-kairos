import React from "react";
import "assets/frontpage/frontpage-main.scss";
import Logo from "assets/images/logo.svg";
import HomeIcon from "assets/images/home-icon.svg";
import { Link } from "react-router-dom";
import PCITCloud from "assets/images/pc-it-cloud.svg";
function Home() {
  return (
    <div className="font-frontpage-global">
      <div className="relative banner">
        <div className="big-screen flex justify-end mx-auto h-full">
          <div className="header-right"></div>
        </div>
        <div className="absolute w-full top-0 left-0 z-30">
          <div className="big-screen flex justify-end mx-auto">
            <div className="header-top flex justify-center items-center">
              <div className="header-top-item">
                <Link className="header-top-item__text text-white" to="/">
                  EN
                </Link>
              </div>
              <div className="header-top-item m-left-100">
                <Link className="header-top-item__text text-white" to="/">
                  Company
                </Link>
              </div>
              <div className="header-top-item m-left-100">
                <Link className="header-top-item__text text-white" to="/">
                  Partner Market Place
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-10 w-full h-full">
          <div className="kairos-container flex items-center justify-start h-full mx-auto">
            <div className="banner-slogan-left">
              Asia IT
              <br />
              Market Place
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="kairos-container flex mx-auto justify-between">
            <div className="col-left">
              <div className="flex justify-between">
                <Link to="/">
                  <img src={Logo} />
                </Link>
                <div className="flex items-center">
                  <img src={HomeIcon} />
                  <Link to="/" className="banner-text-home">
                    Home
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-right">
              <ul className="menu">
                <li className="inline-block">
                  <Link className="text-white" to="/">
                    Auto Homepage
                  </Link>
                </li>
                <li className="inline-block m-left-72">
                  <Link className="text-white" to="/">
                    Sales
                  </Link>
                </li>
                <li className="inline-block m-left-72">
                  <Link className="text-white" to="/">
                    CRM
                  </Link>
                </li>
                <li className="inline-block m-left-72">
                  <Link className="text-white" to="/">
                    Eletronic office
                  </Link>
                </li>
                <li className="inline-block m-left-72">
                  <Link className="text-white" to="/">
                    Cloud ERP
                  </Link>
                </li>
                <li className="inline-block m-left-72">
                  <Link className="text-white" to="/">
                    SSL
                  </Link>
                </li>
              </ul>
              <ul className="tab-now-future m-top-100 text-center">
                <li className="inline-block">
                  <button type="button" className="text-white active">
                    Now
                  </button>
                </li>
                <li className="inline-block m-left-20">
                  <button type="button" className="text-white">
                    Future
                  </button>
                </li>
              </ul>
              <div className="now-future-panel m-top-30 flex justify-center">
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
      <div className="background-pink p-top-40 p-bottom-40 big-screen mx-auto text-center">
        <p style={{ fontSize: "24px", lineHeight: "32px", color: "#181949" }}>
          You are now viewing an <strong>IT Software</strong> that has been verified by <strong>over 1 million users.</strong>
        </p>
      </div>
      <div className="big-screen mx-auto p-top-78 p-bottom-78 cloud-service text-center">
        <p style={{ fontSize: "48px", lineHeight: "65px", color: "#181949" }}>
          <strong>IT CLOUD SEA’S IT SERVICE</strong>
        </p>
      </div>
      <div className="box-wrapper mx-auto flex justify-between">
        <div className="w-1/2">
          <img src={PCITCloud} />
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}

export default Home;
