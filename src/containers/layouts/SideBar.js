import React, { Component } from "react";
import "./sidebar.scss";
import Icofont from "react-icofont";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";

class SideBar extends Component {
  render() {
    const { hospital } = this.props;
    return (
      <div className=" bg-default-blue col-sm-4 col-md-3 col-xl-2">
        <aside className="text-white d-sm-none">
          <header className="header-container">
            <div className="header-content">
              <div className="header-content-image">
                <Icofont icon="pigeon-2" className="text-center" />
              </div>
              <h1 className="header-title font-weight-bolder text-center">
                {hospital?.body
                  ? hospital?.body?.name
                  : "Hohoe Municiapl Hospital"}
              </h1>
            </div>
          </header>

          <MobileNavBar />
        </aside>

        <aside className="sidebar d-none d-sm-block">
          <header className="pt-5">
            <div className="header-content">
              <div className="header-content-image">
                <Icofont icon="pigeon-2" className="text-center" />
              </div>
              <h1 className="header-title font-weight-bolder text-center">
                {hospital?.body
                  ? hospital?.body.name
                  : "Hohoe Municiapl Hospital"}
              </h1>
            </div>
            <div className="header-description">
              The right place to tell the world how a hospital treated you.
            </div>
          </header>

          <NavBar />

          {/* <Footer /> */}
        </aside>
      </div>
    );
  }
}

export default SideBar;
