import { Nav, Navbar } from "react-bootstrap";
import "./HomePage.scss";
import { Component } from "react";
import ambulance from "../../assets/imges/ambulance.svg";

class HomePage extends Component {
  render() {
    const { hospital } = this.props;
    console.log(hospital);
    return (
      <div className="content">
        <header className="home-header">
          <Navbar
            bg="white"
            className="d-flex justify-content-between"
            expand="lg"
          >
            <Navbar.Brand href="#home" className="text-success">
              {hospital?.body?.name}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav.Link className="btn" href="#home">
              Home
            </Nav.Link>
          </Navbar>
          <div className="hero-container">
            <div className="hero-title-container">
              <h2 className="hero-title">More than just a touch of care</h2>
              <div className="hero-side-bg">
                <img src={ambulance} alt="ambulance" className="ambu-img" />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default HomePage;
