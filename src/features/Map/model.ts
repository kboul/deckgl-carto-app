export default interface MapProps {
  polygonColor: number[];
  strokeColor: number[];
  strokeSize: number;
  viewState: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}
