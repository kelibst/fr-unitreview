import React, { Component } from "react";
import { Alert, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import successWithMessage from "../store/actions/successAction";
import Icofont from "react-icofont";

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  componentDidMount() {
    const { show } = this.state;
    show &&
      setTimeout(() => {
        const { successWithMessage } = this.props;
        show &&
          this.setState(
            {
              show: true,
            },
            successWithMessage("")
          );
      }, 3000);
  }
  render() {
    const { show } = this.state;
    const { success } = this.props;

    const setShow = () => {
      const { successWithMessage } = this.props;
      this.setState(
        {
          show: false,
        },
        successWithMessage("")
      );
    };

    return (
      <div className="al-pre-cont">
        <Alert show={show} variant="success" className="al-cont col-sm-10 col-md-6 mx-auto col-lg-4">
          <Alert.Heading>
            {" "}
            <Icofont icon="tick-mark" /> {success?.message}
          </Alert.Heading>

          <div className="d-flex justify-content-end">
            <Button onClick={setShow} variant="outline-success">
              close
            </Button>
          </div>
        </Alert>
      </div>
    );
  }
}

Success.defaultProps = {
  success: PropTypes.shape,
};
Success.propTypes = {
  success: PropTypes.shape,

  successWithMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  success: state.success.message,
});
export default connect(mapStateToProps, { successWithMessage })(Success);
