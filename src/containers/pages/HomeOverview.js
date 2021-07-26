import reviewimg from "../../assets/imges/review.svg";
import decisions from "../../assets/imges/decisions.svg";
import report from "../../assets/imges/report.svg";
import register from "../../assets/imges/register.svg";

const HomeOverview = () => {
    return (
        <section className="home-content my-5">
        <div className="services">
          <div className="overview bg-light">
            <header className="ser-header">
              <h3 className="ser-name pt-4 text-center fw-bold">
                We register you the first time you visit the hospital.
              </h3>
            </header>

            <div className="ser-cont">
              <div className="ser-card">
                <div className="ser-card-img">
                  <img className="ser-img img-resp" src={reviewimg} alt="reviewing"/>
                </div>
                <div className="ser-card-cont">Leave a Review</div>
              </div>

              <div className="ser-card">
                <div className="ser-card-img">
                  <img className="ser-img img-resp" src={decisions} alt="decisions"/>
                </div>
                <div className="ser-card-cont mx-3">Leave a Review</div>
              </div>

              <div className="ser-card">
                <div className="ser-card-img">
                  <img className="ser-img img-resp" src={report} alt="report"/>
                </div>
                <div className="ser-card-cont mx-3">Leave a Review</div>
              </div>
            </div>
          </div>
          <div className="overview">
            <header className="ser-header">
              <h3 className="ser-name pt-4 text-center fw-bold">
                How to help us serve you better.
              </h3>
              <p className="ser-head-cont text-center">
                If you have recently been to our facility, let us know how you
                were treated...
              </p>
            </header>

            <div className="d-flex justify-content-center container align-items-center">
              <div className="col-md-6">
                <h6 className="fw-bold text-center">
                  Receive an email or SMS
                </h6>
                <p className="text-center h4">
                  You will receive a registration email or SMS right after we
                  register you. If you do not receive the email or SMS, Kindly
                  let us know before you leave the hospital.
                </p>
              </div>
              <div className=" col-md-6">
                <img className="img-fluid" src={register} alt="register" />
              </div>
            </div>
          </div>


          <div className="overview  my-4">
          
            <div className="d-flex justify-content-center container align-items-center pt-5">
              <div className="col-md-6">
                <h6 className="fw-bold text-center">
                  Receive an email or SMS
                </h6>
                <p className="text-center h4">
                  You will receive a registration email or SMS right after we
                  register you. If you do not receive the email or SMS, Kindly
                  let us know before you leave the hospital.
                </p>
              </div>
              <div className=" col-md-6">
                <img className="img-fluid" src={report} alt="report" />
              </div>
            </div>
          </div>


          <div className="overview my-4">

            <div className="d-flex justify-content-center container align-items-center pt-5">
              <div className="col-md-6">
                <h6 className="fw-bold text-center">
                  Receive an email or SMS
                </h6>
                <p className="text-center h4">
                  You will receive a registration email or SMS right after we
                  register you. If you do not receive the email or SMS, Kindly
                  let us know before you leave the hospital.
                </p>
              </div>
              <div className=" col-md-6">
                <img className="img-fluid" src={reviewimg} alt="reviewing" />
              </div>
            </div>
          </div>



        </div>
      </section>
    )
}

export default HomeOverview
