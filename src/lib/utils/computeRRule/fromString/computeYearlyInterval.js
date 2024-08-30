import RRule from "rrule";

const computeYearlyInterval = (data, rruleObj) => {
  if (rruleObj.freq !== RRule.YEARLY) {
    return data.repeat.yearly.interval;
  }

  return rruleObj.interval;
};

export default computeYearlyInterval;
