import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { unloadError } from '../store/actions/errorAction';
import Icofont from 'react-icofont';

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
    // const { error } = errors?.response?.data
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
          {/* { error?.message && (<h6 className="my-5"> {error?.message}</h6>)} */}
          {/* { errors?.response && (<h6 className="my-1"> Sorry something went wrong</h6>)} */}
          
            { typeof(errors) == "object" && <h6>{errors?.Email}</h6>}
            {Array.isArray(errors) && errors.map(err => <h6>{err}</h6>) }
            {errors?.response?.data && Object.entries(errors?.response?.data?.error).map(error => <h6 className="my-2">{error}</h6>)}
            {errors?.request && !errors?.response?.data && <h6 className="my-5"><Icofont icon="close" /> {errors.request.response}</h6>}
            
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
