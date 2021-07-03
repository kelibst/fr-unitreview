import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../containers/layouts/NavBar'
import { BrowserRouter, Route } from 'react-router-dom';
import SideBar from '../../containers/layouts/SideBar'
import { fetchAdmin } from '../../store/actions/userAction'
import  './Dashboard.scss'
import Units from './Units';
import DashNav from './DashNav';

class Dashboard extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let jwtToken = localStorage.getItem('jwt')
        jwtToken = JSON.parse(jwtToken)
        const { fetchAdmin , currentUser,  } = this.props
        !currentUser.id && jwtToken && fetchAdmin(jwtToken)
    }

    componentDidUpdate(){
        const { error, history, currentUser } = this.props;
        let jwtToken = localStorage.getItem('jwt')
        jwtToken = JSON.parse(jwtToken)
        error?.response?.status === 401 && history.push("/login")
        !currentUser.id && !jwtToken && history.push("/login")
    }
    render() {
        const { hospital, currentUser } = this.props
        return (
            <div className="dashboard bg-light">
                <SideBar hospital={hospital} />
                <BrowserRouter>
                <div className="container-fluid bg-white dash-content">
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
    error: state.errors.err
  });
export default connect(mapStateToProps, {  fetchAdmin })(Dashboard)
