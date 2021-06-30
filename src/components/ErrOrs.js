import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { unloadError } from '../store/actions/errorAction';

class ErrOrs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  componentWillUnmount() {
    const { unloadError } = this.props;
    unloadError();
  }
  

  render() {
    const { show } = this.state;
    const { errors } = this.props;
    const { error } = errors?.response?.data
    const setShow = () => {
      
      const { unloadError, errors } = this.props;
      
      unloadError();
      this.setState({
        show: false,
      });
    };

    return (
      <div>
        <Alert show={show} variant="danger">
          <div>
          { error?.message && (<h6 className="my-5"> {error?.message}</h6>)}
            { typeof(error) == "object" && <h6>{error?.Email}</h6>}
            {Array.isArray(error) && error.map(err => <h6>{err}</h6>) }
            {error?.request && !error?.response?.data && <h6 className="my-5">{error.request.response}</h6>}
          </div>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={setShow} variant="outline-danger">
              close
            </Button>
          </div>
        </Alert>
      </div>
    );
  }
}

ErrOrs.defaultProps = {
  errors: PropTypes.shape,
};
ErrOrs.propTypes = {
  errors: PropTypes.shape,

  unloadError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors.err,
});
export default connect(mapStateToProps, { unloadError })(ErrOrs);
