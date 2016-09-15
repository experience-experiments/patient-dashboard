let patients = [
  {id: '123', hr: 65.87, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '124', hr: 65.87, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '125', hr: 65.87, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '136', hr: 69.45, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '137', hr: 83.24, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '138', hr: 55.76, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '139', hr: 76.12, rr: 16.20, bps: 120, bpd: 80, temp: 36.9},
  {id: '140', hr: 61.75, rr: 16.20, bps: 120, bpd: 80, temp: 36.9}
];

let subscribers = [];

let simulationInterval;

const allPatientIds = () => patients.map(p => p.id);

const allPatients = () => patients;

const subscribe = (patientChangeHandler) => {
  subscribers.push(patientChangeHandler);
  return allPatients();
};

const unsubscribe = (patientChangeHandler) => {
  subscribers = subscribers.filter(fn => fn !== patientChangeHandler);
  return null;
};

const simulateUpdates = () => {
  patients = patients.map(p => {
    const updates = {changes: []};
    const vitals = ['hr', 'rr', 'bps', 'bpd', 'temp'];
    vitals.forEach(vital => {
      // Randomly update patient vitals
      const ACTIONS = ['increase', 'decrease', 'keep'];
      const simulationAction = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
      if (simulationAction === ACTIONS[0]) {
        updates[vital] = p[vital] + (Math.ceil(Math.random() * 100) / 100);
        updates.changes.push(vital);
      } else if (simulationAction === ACTIONS[1]) {
        updates[vital] = p[vital] - (Math.ceil(Math.random() * 100) / 100);
        updates.changes.push(vital);
      }
    });
    return Object.assign({}, p, updates);
  });

  subscribers.forEach(fn => fn(patients));
};

const startSimulation = (intervalMs = 500) => {
  simulationInterval = setInterval(simulateUpdates, intervalMs);
};

const stopSimulation = () => {
  clearInterval(simulationInterval);
};

module.exports = {
  allPatientIds,
  allPatients,
  subscribe,
  unsubscribe,
  startSimulation,
  stopSimulation
};
