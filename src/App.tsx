import Map from './components/Map';

export default function App() {
  const viewState = { longitude: 0, latitude: 0, zoom: 2 };

  return <Map viewState={viewState} />;
}
