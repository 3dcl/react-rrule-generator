import moment from 'moment';

const computeEnd = ({ mode, after, onDate: { date } }, dateTimeFormat) => {
  const end = {};

  if (mode === 'After') {
    end.count = after;
  }

  if (mode === 'On date') {
    end.until = moment(date, dateTimeFormat).format();
  }

  return end;
};

export default computeEnd;
