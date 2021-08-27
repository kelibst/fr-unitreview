import React, { Component } from 'react'
import Icofont from 'react-icofont'

class Unit extends Component {
    constructor(props){
        super(props)
      }
    render() {
        const { unit } = this.props
        return (
            <div className="unit-card d-flex justify-content-between align-items-cente">
                <div className="unit-rowr">
                    <div className="unit-row-head"> <h6 className="h6 text-capitalize fw-bold">{unit?.body?.name}
                    <br /><span className="text-secondary"><Icofont icon="comment" /><span className="ms-2">{unit?.body?.reviews}</span></span>
                         <br /><span className="text-secondary"><Icofont icon="clock-time" /> <span className="ms-2">{unit?.dates?.created_at}</span> </span>
                    </h6>
                    </div>
                </div>
                <h6 className="text-dark text-capitalize fw-bold">{unit?.body?.unitHead}</h6>
                <h6 className="text-danger">{unit?.body?.score ? unit?.body?.score : 0 } </h6>
            </div>
        )
    }
}
export default Unit