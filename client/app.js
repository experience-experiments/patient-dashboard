import {Observable} from 'rxjs';
import {diff, patch, create} from 'virtual-dom';
import io from 'socket.io-client';

import './styles.scss';
import patientList from './patient-list/patient-list';

function render(patients) {
  return patientList(patients);
}

const socket = io();

const mountElement = document.getElementById('dashboard');
mountElement.innerHTML = '';
let vDom = render([]);
let domTree = create(vDom);
mountElement.appendChild(domTree);

const dataStream = Observable.fromEvent(socket, 'patient-update');
dataStream.subscribe(d => {
  const newVDom = render(d);
  const patches = diff(vDom, newVDom);
  domTree = patch(domTree, patches);
  vDom = newVDom;
});
