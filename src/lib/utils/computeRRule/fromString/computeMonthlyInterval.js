import {MONTHLY} from 'rrule'
const computeMonthlyInterval = (data, rruleObj) => {
  if (rruleObj.freq !== MONTHLY) {
    return data.repeat.monthly.interval;
  }

  return rruleObj.interval;
};

export default computeMonthlyInterval;
