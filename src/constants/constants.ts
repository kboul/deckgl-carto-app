const hexColors = {
  blue: '#0000ff',
  red: '#ff0000',
  white: '#ffffff'
};

const rgbColors = {
  green: [50, 100, 50],
  lightRed: [238, 77, 90],
  white: [255, 255, 255]
};

const initialLayerAttributes = {
  polygonColor: rgbColors.lightRed,
  strokeColor: rgbColors.green,
  strokeSize: 1
};

const inputNames = {
  polygonColor: 'polygonColor',
  strokeColor: 'strokeColor',
  strokeSize: 'strokeSize'
};

export { hexColors, initialLayerAttributes, inputNames, rgbColors };
