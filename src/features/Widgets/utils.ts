const sortObjArrByProperty = (arr: Array<any>, property: string): any[] =>
  arr.sort((a, b) =>
    a[property].toLowerCase() > b[property].toLowerCase() ? 1 : -1
  );

const getSelectedContinentsNum = (selectedContinents: string[]): string => {
  const selected = 'Selected';
  const selContLength = selectedContinents.length;
  if (selContLength === 0) return `All ${selected}`;
  return selContLength === 8
    ? `None ${selected}`
    : `${8 - selContLength} ${selected}`;
};

export { getSelectedContinentsNum, sortObjArrByProperty };
