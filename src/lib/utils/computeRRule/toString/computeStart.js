import moment from 'moment';

const computeStart = ({ onDate: { date } }, dateTimeFormat) => {
  let parsedDate = moment(date, dateTimeFormat);

  // verify that incoming date is valid
  // by seeing if it can be converted into a moment object.
  // if not, then create a new date  
  if (!parsedDate.isValid()) {
    parsedDate = moment().milliseconds(0);
  }

  return {
    dtstart: parsedDate.toDate(),
  };
};

export default computeStart;
