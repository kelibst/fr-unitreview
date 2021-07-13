import React, { Component } from 'react'
import Icofont from 'react-icofont'

class DashNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentDateTime: Date().toLocaleString()
        }
    }
    render() {
        const { currentUser, logUserOut } = this.props
       
        return (
            <nav className="nav d-flex m-3 justify-content-between">
                <div className="dash-nav-header">
                    <h5 className="dash-nav-title">Dashboard Overview</h5>
                    <p className="dash-date">{this.state.currentDateTime}</p>
                </div>
                <div className="dash-ul">
                    <a href="#" className="dash-link"><Icofont icon="search" /></a>
                    <a href="#" className="dash-link noti">
                        <Icofont icon="notification" />
                        <span className="noti-ink"></span>
                    </a>
                    <a href="#" className="dash-link bd-rt">
                        <Icofont icon="gear-alt" />
                    </a>
                    <div className="dash-user">
                        <div className="dash-user-icon"><Icofont icon="user" /></div>
                        <p className="dash-user-name">{currentUser?.body?.name}</p>
                        <button className="btn--exit" onClick={()=> logUserOut()}><Icofont icon="exit"/></button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default DashNav
