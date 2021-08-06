import React from 'react'

const ClientUnit = ({unit}) => {
    const {name, unitHead, score } = unit.body
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return (
        <div className="unit-cont box col-md-4 col-lg-3 red-border">
            <div className="unit-header">
                <h5 className="unit-h1">{name}</h5>
            </div>
        </div>
    )
}

export default ClientUnit
