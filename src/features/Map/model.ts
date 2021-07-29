export default interface MapProps {
  polygonColor: number[];
  strokeColor: number[];
  viewState: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}
