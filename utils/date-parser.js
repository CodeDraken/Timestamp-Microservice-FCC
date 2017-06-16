const defaultOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const convertNatural = (input, options) => {
  const natural = new Date(input).toLocaleDateString('en-us', options);
  const unix = new Date(input).getTime() / 1000;

  return {natural, unix, input};
};

const convertUnix = (input, options) => {
  const unix = input;
  const natural = new Date(input * 1000).toLocaleDateString('en-us', options);

  return {natural, unix, input};
};

const dateParser = (input, options = defaultOptions) => {
  if(isNaN(input)) {
    return convertNatural(input, options);
  } else {
    return convertUnix(input, options);
  }
};

module.exports = {
  dateParser
};

