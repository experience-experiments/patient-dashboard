import {Observable} from 'rxjs';
import {diff, patch, create} from 'virtual-dom';
import patientList from './patient-list/patient-list';

const data = [
  {id: '123', hr: 65.87, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '124', hr: 65.87, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '125', hr: 65.87, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '136', hr: 69.45, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '137', hr: 83.24, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '138', hr: 55.76, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '139', hr: 76.12, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '140', hr: 61.75, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '141', hr: 65.84, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '142', hr: 54.50, rr: 16.20, bps: 120, bpd: 80, temp: 36.9}
];

function render(patients) {
  return patientList(patients);
}

const mountElement = document.getElementById('content');
mountElement.innerHTML = '';
let vDom = render([]);
let domTree = create(vDom);
mountElement.appendChild(domTree);

Observable.of(data).subscribe(d => {
  const newVDom = render(d);
  const patches = diff(vDom, newVDom);
  domTree = patch(domTree, patches);
  vDom = newVDom;
});

