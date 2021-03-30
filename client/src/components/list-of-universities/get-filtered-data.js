export const getFilteredData = (filters, data) => {
  let result = [...data];

  Object.entries(filters).forEach(([key, value]) => {
    if (typeof value === 'boolean' && value) {
      result = result.filter((item) => item[key]);
    } else {
      result = result.filter((item) => item[key]._id === value._id);
    }
  });

  return result;
};
