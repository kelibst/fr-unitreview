import { Nav, Navbar } from "react-bootstrap";
import "./HomePage.scss";
import { Component } from "react";
import heart from "../../assets/imges/heart.svg";
import reviewimg from '../../assets/imges/review.svg'
import decisions from '../../assets/imges/decisions.svg'
import report from '../../assets/imges/report.svg'

class HomePage extends Component {
  render() {
    const { hospital } = this.props;
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
              <h1 className="hero-title fw-bold mx-3 my-4">More than just a  <span class="fw-bold text-lime">touch</span> of care</h1>
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

        <section className="home-content my-5">
          <div className="services">
            <header className="ser-header">
                <h3 className="ser-name pt-4 text-center fw-bold">Our Services</h3>
                <p className="ser-head-cont text-center">If you have recently been to our facility, let us know how you were treated...</p>
            </header>
          

            <div className="ser-cont">
              <div className="ser-card">
                <div className="ser-card-img">
                  <img className="ser-img img-resp" src={reviewimg} />
                </div>
                <div className="ser-card-cont">
                  Leave a Review
                </div>
              </div>

              <div className="ser-card">
                <div className="ser-card-img">
                <img className="ser-img img-resp" src={decisions} />
                </div>
                <div className="ser-card-cont mx-3">
                  Leave a Review
                </div>
              </div>

              <div className="ser-card">
                <div className="ser-card-img">
                <img className="ser-img img-resp" src={report} />
                </div>
                <div className="ser-card-cont mx-3">
                  Leave a Review
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="services">
            <header className="ser-header">
                <h3 className="ser-name pt-4 text-center fw-bold">Our Services</h3>
                <p className="ser-head-cont text-center">If you have recently been to our facility, let us know how you were treated...</p>
            </header>
          

            <div className="ser-cont">
              <div className="ser-card">
                <div className="ser-card-img">
                  <img className="ser-img img-resp" src={reviewimg} />
                </div>
                <div className="ser-card-cont">
                  Leave a Review
                </div>
              </div>

              <div className="ser-card">
                <div className="ser-card-img">
                <img className="ser-img img-resp" src={decisions} />
                </div>
                <div className="ser-card-cont mx-3">
                  Leave a Review
                </div>
              </div>

              <div className="ser-card">
                <div className="ser-card-img">
                <img className="ser-img img-resp" src={report} />
                </div>
                <div className="ser-card-cont mx-3">
                  Leave a Review
                </div>
              </div>
            </div>
          </div>
     


          <div className="services">
            <header className="ser-header">
                <h3 className="ser-name pt-4 text-center fw-bold">Our Services</h3>
                <p className="ser-head-cont text-center">If you have recently been to our facility, let us know how you were treated...</p>
            </header>
          

            <div className="ser-cont">
              <div className="ser-card">
                <div className="ser-card-img">
                  <img className="ser-img img-resp" src={reviewimg} />
                </div>
                <div className="ser-card-cont">
                  Leave a Review
                </div>
              </div>

              <div className="ser-card">
                <div className="ser-card-img">
                <img className="ser-img img-resp" src={decisions} />
                </div>
                <div className="ser-card-cont mx-3">
                  Leave a Review
                </div>
              </div>

              <div className="ser-card">
                <div className="ser-card-img">
                <img className="ser-img img-resp" src={report} />
                </div>
                <div className="ser-card-cont mx-3">
                  Leave a Review
                </div>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default HomePage;
