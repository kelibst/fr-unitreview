import { Nav, Navbar } from "react-bootstrap";
import "./HomePage.scss";
import { Component } from "react";
import heart from "../../assets/imges/heart.svg";
import HomeOverview from "./HomeOverview";
import Clients from "../../components/Patients/Clients";
import Success from "../../components/Success";
import Home from "./Home";
import ErrOrs from "../../components/ErrOrs";
import ClientView from "../../components/Patients/ClientView";
import { matchPath, Route } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const { hospital, location, err, client, success} = this.props;
    const {pathname} = location
    return (
      <div className="content">
        {success?.message.length && <Success />}
        <header className="home-header">
          <Navbar
            bg="white"
            className="d-flex justify-content-between"
            expand="lg"
          >
            <Navbar.Brand href="/" className="home-brand">
              {hospital?.body?.name}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {client?.body ? 
              client?.body?.name :
              <Nav.Link className="btn btn-lime" href="/client/login">
              Login
            </Nav.Link>
          }
          </Navbar>
          <div className="hero-container container-lg d-flex">
            <div className="hero-title-container mx-auto my-auto col-md-6">
              <h1 className="hero-title fw-bold mx-3 my-4">
                More than just a <span class="fw-bold text-lime">touch</span> of
                care
              </h1>
              <div className="hero-card shadow-lg d-flex mt-5 mx-auto">
                <img src={heart} className="lil-heart" alt="lil-heart"/>
                <div className="hero-card-cont">24 hours Health-Care</div>
                <div className="hero-card-cont">7/7 days</div>
              </div>
            </div>
            <div className="hero-side d-flex align-items-center justify-content-center col-md-6">
              <div className="hero-side-bg">
                
              </div>
            </div>
          </div>
        </header>
          {/* {err?.response && ErrOrs} */}
       { pathname === "/" && <Home /> }
       {pathname === "/about" && <HomeOverview />}
       { pathname === "/client/dashboard" && <Clients />}
       <Route exact path='/unit/:id' component={ClientView} />
        <footer className="home-footer text-center my-2">
          <div className="copyright fw-bold">
            Copyright &copy; 2021 {hospital?.body?.name}
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
