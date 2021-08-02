const baseUrl = 'https://public.carto.com:443/api/v2/sql?q=';

const countriesEndpoint =
  'select continent, count(*) from public.ne_50m_admin_0_countries GROUP BY continent';

const countriesAlertMsg = 'An error occured while fetching continent countries';

const countriesLoader = 'Fetching continent countries...';

const barTooltip = 'Click the bar to toggle continent polygons on the map';

export {
  barTooltip,
  baseUrl,
  countriesAlertMsg,
  countriesEndpoint,
  countriesLoader
};
