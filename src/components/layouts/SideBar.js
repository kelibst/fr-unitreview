
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHospital } from '../../store/actions/fetchAction'

class SideBar extends Component {
componentDidMount() {
  const { fetchHospital } = this.props
  fetchHospital()
}
  render() {
    return (
      <div className="sidebar">
        Sidebar
      </div>
    )
  }
}
const mapStateToProps = state => ({
  hospital: state.hospital
});
export default connect (mapStateToProps,{fetchHospital}) (SideBar)
