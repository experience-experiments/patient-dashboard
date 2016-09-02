import {h} from 'virtual-dom';
import './patient-list.scss';

const renderPatient = (patient) => {
  const {id, hr, rr, bps, bpd, temp, changes} = patient;
  const getVitalClass = (vitalName) =>
    ((changes && changes.indexOf(vitalName) > -1) ? '.changed' : '');

  return h('div.column.is-one-quarter', h('div.card.patient-card', [
    h('header.card-header', [
      h('p.card-header-title', `Patient ${id}`),
      h('a.card-header-icon', h('i.fa.fa-angle-down'))
    ]),
    h('div.card-content', [
      h('div.content', [
        h('div.vital', [
          'Heart Rate',
          h('br'),
          h(`div.hr${getVitalClass('hr')}`,
          [hr.toFixed(2)])
        ]),
        h('div.vital', [
          'Respiratory Rate',
          h('br'),
          h(`div.rr${getVitalClass('rr')}`,
          [rr.toFixed(2)])
        ]),
        h('div.vital', [
          'Blood Pressure',
          h('br'),
          h(`div.bp${getVitalClass('bps')}${getVitalClass('bpd')}`,
          [bps.toFixed(2), ' / ', bpd.toFixed(2)])
        ]),
        h('div.vital', [
          'Temprature',
          h('br'),
          h(`div.temp${getVitalClass('temp')}`,
          [temp.toFixed(2)])
        ])
      ])
    ]),
    h('footer.card-footer', [
      h('a.card-footer-item', 'Pin'),
      h('a.card-footer-item', 'Unwatch')
    ])
  ]));
};

const sliceArray = (arr = [], numberOfItemsInSlice = 4) => {
  const slices = [];
  for (let i = 0; i < arr.length; i += numberOfItemsInSlice) {
    slices.push(arr.slice(i, i + numberOfItemsInSlice));
  }
  return slices;
};

export default function render(patients) {
  const patientRows = sliceArray(patients, 4).map(rowItems =>
    h('div.columns', rowItems.map(renderPatient)));
  return h('div.container.patient-list', patientRows);
}
