const hexToRgb = (hex: string): number[] => {
  if (!hex) return [238, 77, 90];

  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);

  return [r, g, b];
};

const componentToHex = (c: number): string => {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

const rgbToHex = (rgb: number[]): string =>
  `#${componentToHex(rgb[0])}${componentToHex(rgb[1])}${componentToHex(
    rgb[2]
  )}`;

export { hexToRgb, rgbToHex };
