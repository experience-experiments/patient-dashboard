import {Observable} from 'rxjs';
import React from 'react';
import {render} from 'react-dom';
import io from 'socket.io-client';

import './styles.scss';
import PatientList from './patient-list/PatientList';

const socket = io();

const mountElement = document.getElementById('dashboard');

const dataStream = Observable.fromEvent(socket, 'patient-update');
dataStream.subscribe(d => {
  render(<PatientList patients={d} />, mountElement);
});
