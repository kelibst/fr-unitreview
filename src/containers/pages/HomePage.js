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
import { matchPath, NavLink, Route } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(prevProps, prevState) {
    let jwtToken = localStorage.getItem("patJwt");
    jwtToken = JSON.parse(jwtToken);
    const { history } = this.props;

    // !jwtToken?.exp &&  history.push('/client/login')
  }

  componentDidUpdate(prevProps, prevState) {
    let jwtToken = localStorage.getItem("patJwt");
    jwtToken = JSON.parse(jwtToken);
    const { history } = this.props;
    this.props !== prevProps &&  this.props?.location?.pathname === "/client/dashboard" && !jwtToken?.exp && history.push("/client/login");
  }

  render() {
    const { hospital, location, err, history, client, success } = this.props;
    const { pathname } = location;

    const logUserOut = () => {
      localStorage.removeItem("patJwt");
      history.push("/client/login");
    };

    return (
      <div className="content">
        {success?.message.length !== 0 && <Success />}
        <header className="home-header">
          <Navbar
            bg="white"
            className="d-flex justify-content-between"
            expand="lg"
          >
            <NavLink to="/" className="brand home-brand">
              {hospital?.body?.name}
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {client?.body ? (
              <div className="linkss d-flex me-3">
                <NavLink className="nav-link" to="/">
                  {client?.body?.name}
                </NavLink>

                <NavLink className="nav-link" to="/client/dashboard">
                  Dashboard
                </NavLink>

                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => logUserOut()}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="linkss d-flex">
                <NavLink className="nav-link" to="/client/login">
                  Login
                </NavLink>

                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </div>
            )}
          </Navbar>
          <div className="hero-container container-lg d-flex">
            <div className="hero-title-container mx-auto my-auto col-md-6">
              <h1 className="hero-title fw-bold mx-3 my-4">
                More than just a{" "}
                <span className="fw-bold text-lime">touch</span> of care
              </h1>
              <div className="hero-card shadow-lg d-flex mt-5 mx-auto">
                <img src={heart} className="lil-heart" alt="lil-heart" />
                <div className="hero-card-cont">24 hours Health-Care</div>
                <div className="hero-card-cont">7/7 days</div>
              </div>
            </div>
            <div className="hero-side d-flex align-items-center justify-content-center col-md-6">
              <div className="hero-side-bg"></div>
            </div>
          </div>
        </header>
        {/* {err?.response && ErrOrs} */}
        {pathname === "/" && <Home />}
        {pathname === "/about" && <HomeOverview />}
        {pathname === "/client/dashboard" && <Clients />}
        <Route exact path="/unit/:id" component={ClientView} />
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
