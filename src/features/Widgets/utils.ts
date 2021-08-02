const sortObjArrayByProperty = (array: any[], property: string): any[] =>
  array.sort((a, b) =>
    a[property].toLowerCase() > b[property].toLowerCase() ? 1 : -1
  );

const getSelectedContinentsNumber = (selectedContinents: string[]): string => {
  const selected = 'Selected';
  const selContLength = selectedContinents.length;
  const totalContinentsNumber = 8;

  if (selContLength === 0) return `All ${selected}`;

  return selContLength === totalContinentsNumber
    ? `None ${selected}`
    : `${totalContinentsNumber - selContLength} ${selected}`;
};

export { getSelectedContinentsNumber, sortObjArrayByProperty };
