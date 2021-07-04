export const getNewDataInObject = (array, value) => {
  return array.map((element) => ({
    ...element,
    type: Object.keys(value).find(
      (key) => value[key] === element.name
    ),
  }));
};
