const commonSuffix =
  'from public.ne_50m_admin_0_countries GROUP BY continent order by continent asc';

const countriesSqlOperation = `select continent, count(*) ${commonSuffix}`;

const populationSqlOperation = `select continent, SUM(pop_est) ${commonSuffix}`;

const errorMsg = 'An error occured while fetching continent';

const countriesAlertMsg = `${errorMsg} countries`;

const populationAlertMsg = `${errorMsg} population`;

const countriesLoaderMsg = 'Fetching continent countries...';

const populationLoaderMsg = 'Fetching continent population...';

const barTooltip = 'Click the bar to toggle continent polygons on the map';

export {
  barTooltip,
  countriesAlertMsg,
  countriesSqlOperation,
  countriesLoaderMsg,
  populationAlertMsg,
  populationLoaderMsg,
  populationSqlOperation
};
