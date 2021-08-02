const sortObjArrByProperty = (arr: Array<any>, property: string) =>
  arr.sort((a, b) =>
    a[property].toLowerCase() > b[property].toLowerCase() ? 1 : -1
  );

export { sortObjArrByProperty };
