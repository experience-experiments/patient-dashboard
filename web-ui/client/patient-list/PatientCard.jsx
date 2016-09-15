import React, {PropTypes} from 'react';
import './PatientCard.scss';

const PatientCard = ({patient}) => {
  const {id, hr, rr, bps, bpd, temp, changes} = patient;
  const getVitalClass = (vitalName) =>
    ((changes && changes.indexOf(vitalName) > -1) ? ' changed' : '');

  return (
    <div className="column is-one-quarter">
      <div className="card patient-card">
        <header className="card-header">
          <p className="card-header-title">
            Patient <strong>{id}</strong>
          </p>
          <a className="card-header-icon"><i className="fa fa-angle-down" /></a>
        </header>
        <div className="card-content">
          <div className="vital">
            <span>Heart Rate</span>
            <br />
            <div className={`hr${getVitalClass('hr')}`}>
              {hr.toFixed(2)}
            </div>
          </div>
          <div className="vital">
            <span>Respiratory Rate</span>
            <br />
            <div className={`rr${getVitalClass('rr')}`}>
              {rr.toFixed(2)}
            </div>
          </div>
          <div className="vital">
            <span>Blood Pressure</span>
            <br />
            <div className={`bp${getVitalClass('bps')}${getVitalClass('bpd')}`}>
              {`${bps.toFixed(2)} / ${bpd.toFixed(2)}`}
            </div>
          </div>
          <div className="vital">
            <span>Temprature</span>
            <br />
            <div className={`temp${getVitalClass('temp')}`}>
              {temp.toFixed(2)}
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a className="card-footer-item">Pin</a>
          <a className="card-footer-item">Unwatch</a>
        </footer>
      </div>
    </div>
  );
};

PatientCard.propTypes = {
  patient: PropTypes.object
};

export default PatientCard;
