const hexToRgb = (hex: string): number[] => {
  if (!hex) return [238, 77, 90];

  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);

  return [r, g, b];
};

const componentToHex = (component: number): string => {
  const hex = component.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

const rgbToHex = (rgb: number[]): string =>
  `#${componentToHex(rgb[0])}${componentToHex(rgb[1])}${componentToHex(
    rgb[2]
  )}`;

const capitalFirstLetter = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);

const splitWordOnCapitalLetter = (word: string): string[] =>
  word.split(/(?=[A-Z])/);

const inputNameToLabel = (inputName: string): string =>
  splitWordOnCapitalLetter(inputName)
    .map((name, index) =>
      index === 0 ? capitalFirstLetter(name) : `${name.toLowerCase()} `
    )
    .join(' ');

export { hexToRgb, inputNameToLabel, rgbToHex };
