const patients = [
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

export const allPatientIds = () => patients.map(p => p.id);

export default {
  allPatientIds
};
