export default ({date, description, operation, value}) => {
  return value > 0 && description.length > 1 && !!date;
};
