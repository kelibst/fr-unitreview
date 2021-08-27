import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Icofont from "react-icofont";

const Patient = ({ patient, allUnits, jwtToken, addPatientToSlot }) => {
  const { email, phone, name, address } = patient.body;
  const { created_at } = patient.dates;
  let UTCdate = new Date(created_at)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const { reviewer_slots } = patient;
  const isNotEmpty = (obj) => Object.keys(obj).length !== 0;

  const addUnitSlot = (unit_id) => {
    const ids = { unit_id: unit_id, reviewer_id: patient.id };
    addPatientToSlot(ids, jwtToken);
  };
  return (
    <div className="unit-card d-flex justify-content-between align-items-cente">
      <div className="unit-rowr">
        <div className="unit-row-head">
          {" "}
          <h6 className="h6 text-capitalize fw-bold">
            {name}
            <br />
            <span className="text-secondary"> <span className="me-2"><Icofont icon="clock-time" /></span> {UTCdate.toLocaleDateString(undefined, options)}</span>
            <br />
            <span className="text-secondary">
              Slots: {reviewer_slots.length}
            </span>
          </h6>
        </div>
      </div>
      <h6 className="text-dark text-capitalize fw-bold">{address}</h6>
      <h6 className="text-dark text-capitalize fw-bold">{email}</h6>
      <h6 className="text-dark text-capitalize fw-bold">{phone}</h6>
      <DropdownButton id="dropdown-basic-button" title="Add Slot">
        {isNotEmpty(allUnits) &&
          allUnits.map((unit) => (
            <Dropdown.Item
              onClick={() => {
                addUnitSlot(unit.id);
              }}
              key={unit.id}
            >
              {unit?.body?.name}
            </Dropdown.Item>
          ))}
      </DropdownButton>
    </div>
  );
};

export default Patient;
