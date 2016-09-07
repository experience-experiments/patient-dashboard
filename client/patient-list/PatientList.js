import React, {PropTypes} from 'react';

import PatientCard from './PatientCard';
import './PatientList.scss';

const sliceArray = (arr = [], numberOfItemsInSlice = 4) => {
  const slices = [];
  for (let i = 0; i < arr.length; i += numberOfItemsInSlice) {
    slices.push(arr.slice(i, i + numberOfItemsInSlice));
  }
  return slices;
};

const PatientList = ({patients}) => {
  const patientRows = sliceArray(patients, 4)
    .map((rowItems, i) =>
      (<div className="columns" key={i}>
        {rowItems.map((p, j) =>
          (<PatientCard patient={p} key={j} />))
        }
      </div>)
    );
  return (
    <div className="container patient-list">
      {patientRows}
    </div>
  );
};

PatientList.propTypes = {
  patients: PropTypes.array
};

export default PatientList;
