import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../containers/layouts/NavBar'
import { BrowserRouter, Route } from 'react-router-dom';
import SideBar from '../../containers/layouts/SideBar'
import { fetchAdmin } from '../../store/actions/userAction'
import  './Dashboard.scss'
import Units from './Units';
import DashNav from './DashNav';
import Success from '../Success';
import ErrOrs from '../ErrOrs';

class Dashboard extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let jwtToken = localStorage.getItem('jwt')
        jwtToken = JSON.parse(jwtToken)
        const { fetchAdmin , currentUser, fetchUnits } = this.props
        !currentUser.id && jwtToken && fetchAdmin(jwtToken)
    }

    componentDidUpdate(){
        const { error, history, currentUser } = this.props;
        let jwtToken = localStorage.getItem('jwt')
        jwtToken = JSON.parse(jwtToken)
        // error?.response?.status === 401 && history.push("/login")
        typeof(error?.response?.data?.error) === "string" && error?.response?.data?.error?.includes("expired") && history.push("/login")
        !currentUser.id && !jwtToken && history.push("/login")
    }
    render() {
        const { hospital, currentUser, success, error } = this.props
        return (
            <div className="dashboard bg-light">
                <SideBar hospital={hospital} />
                <BrowserRouter>
                <div className="container-fluid bg-white dash-content">

                    { success?.message?.message && <Success /> }
                    { error?.response && <ErrOrs /> }
                    <DashNav currentUser={currentUser} />
                    <Route path="/" component={Units} />
                </div>
                </BrowserRouter>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    hospital: state.hospital,
    currentUser: state.userData.currentUser,
    success: state.success,
    error: state.errors.err,
  });
export default connect(mapStateToProps, {  fetchAdmin})(Dashboard)
