import { Nav, Navbar } from "react-bootstrap";
import "./HomePage.scss";
import { Component } from "react";
import heart from "../../assets/imges/heart.svg";

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
          <div className="hero-container d-flex">
            <div className="hero-title-container mx-auto my-auto col-md-6">
              <h1 className="hero-title fw-bold mx-3 my-4">More than just a  <span class="fw-bold text-success">touch</span> of care</h1>
             <div className="hero-card shadow-lg d-flex mt-5 mx-auto">
               <img src={heart} className="lil-heart"/>
               <div className="hero-card-cont">
                  24 hours Health-Care
               </div>
               <div className="hero-card-cont">
                  7/7 days
               </div>
             </div>
            </div> 
            <div className="hero-side-bg col-md-6">
                
              </div>
          </div>
        </header>

        <section className="home-content">
          <div className="services">

          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
