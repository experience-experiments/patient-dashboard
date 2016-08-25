import {h} from 'virtual-dom';
import './patient-list.scss';

export default function render(patients) {
  return h('ul.patient-list', patients.map(patient => h('li.patient-item', patient.id)));
}
