import { useMap, useGraphic } from 'esri-loader-hooks';

export default function Map({ basemap }) {
  // location
  const latitude = 34.0573;
  const longitude = -117.1949;
  // configure graphic for location
  const geometry = {
    type: 'point', // autocasts as new Point()
    latitude,
    longitude
  };
  const symbol = {
    type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
    color: [226, 119, 40],
  };
  // configure map and view
  const map = {
    basemap: basemap || 'streets'
  };
  const options = {
    view: {
      center: [longitude, latitude],
      zoom: 13
    }
  };
  // load the map
  const [ref, view] = useMap(map, options);
  // show a point on the map
  useGraphic(view, { geometry, symbol });

  return (<div style={{ height: 400, maxWidth: 400 }} ref={ref} />);
}
