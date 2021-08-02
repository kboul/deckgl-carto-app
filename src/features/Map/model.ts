export default interface MapProps {
  polygonColor: number[];
  selectedContinents: string[];
  strokeColor: number[];
  strokeSize: number;
  viewState: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}
