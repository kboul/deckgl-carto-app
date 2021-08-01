import axios from 'axios';

const getContinentCountries = async () => {
  try {
    return axios.get(
      'https://public.carto.com:443/api/v2/sql?q=select continent , count(*) from public.ne_50m_admin_0_countries GROUP BY continent'
    );
  } catch (error) {
    return error;
  }
};

export default { getContinentCountries };
