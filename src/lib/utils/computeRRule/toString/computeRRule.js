import RRule from 'rrule';

import computeStart from './computeStart';
import computeRepeat from './computeRepeat';
import computeEnd from './computeEnd';
import computeOptions from './computeOptions';

const computeRRule = ({
  start,
  repeat,
  end,
  options,
}, dateTimeFormat) => {
  const rruleObject = {
    ...computeStart(start, dateTimeFormat),
    ...computeRepeat(repeat),
    ...computeEnd(end, dateTimeFormat),
    ...computeOptions(options),
  };
  const rrule = new RRule(rruleObject);
  return rrule.toString();
};

export default computeRRule;
