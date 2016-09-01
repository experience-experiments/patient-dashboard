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
  // Pick a random patient
  const patientIndex = Math.floor(Math.random() * patients.length);
  const patient = patients[patientIndex];

  const vitals = ['hr', 'rr', 'bps', 'bpd', 'temp'];
  vitals.forEach(vital => {
    // Randomly update patient vitals
    const ACTIONS = ['increase', 'decrease', 'keep'];
    const simulationAction = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
    if (simulationAction === ACTIONS[0]) {
      patient[vital] += Math.ceil(Math.random() * 10) / 10;
    } else if (simulationAction === ACTIONS[1]) {
      patient[vital] -= Math.ceil(Math.random() * 10) / 10;
    }
  });

  subscribers.forEach(fn => fn(patients));
};

const startSimulation = (intervalMs = 200) => {
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
