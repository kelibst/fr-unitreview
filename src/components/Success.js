import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import successWithMessage from '../store/actions/successAction';
import Icofont from 'react-icofont';

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  render() {
    const { show } = this.state;
    const { success } = this.props;

    const setShow = () => {
      this.setState({
        show: false,
      });
    };

    return (
      <div className="alert-success col-sm-10 col-md-6 col-ld-4 mx-auto">
        <Alert show={show} variant="success">
          <Alert.Heading> <Icofont icon="tick-mark" /> {success?.message}</Alert.Heading>

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

const mapStateToProps = state => ({
  success: state.success.message,
});
export default connect(mapStateToProps, { successWithMessage })(Success);
