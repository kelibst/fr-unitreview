import React from 'react'

const Patient = ({patient}) => {
    return (
        <div className="unit-card d-flex justify-content-between align-items-cente">
        <div className="unit-rowr">
            <div className="unit-row-head"> <h6 className="h6 text-capitalize fw-bold">{patient?.name}
                 <br /><span className="text-secondary">{patient?.created_at}</span>
            </h6>
            </div>
        </div>
        <h6 className="text-dark text-capitalize fw-bold">{patient?.address}</h6>
        <h6 className="text-dark text-capitalize fw-bold">{patient?.email}</h6>
        <h6 className="text-dark text-capitalize fw-bold">{patient?.phone}</h6>
    </div>
    )
}

export default Patient
