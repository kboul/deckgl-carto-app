import { Fragment, useEffect, useState } from 'react';

import { Input, LineBreaker } from '../../components';
import continentsApi from './api';
import { ContinentCountries, Countries } from './models';
import { sortObjArrByProperty } from './utils';
import styles from './styles.module.sass';

export default function ContinentInfo() {
  const [countries, setCountries] = useState<Array<Countries>>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data: ContinentCountries =
      await continentsApi.getContinentCountries();
    setCountries(sortObjArrByProperty(data.data.rows, 'continent'));
  };

  if (countries.length > 0)
    return (
      <div className={styles.container}>
        <h3 className={styles.header}>Continent</h3>

        {countries.map(({ continent, count }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={`range-${index}`}>
            <span className={styles.continent}>{continent.toUpperCase()}</span>

            <LineBreaker className={styles.lineBreaker} />

            <Input
              label=""
              onChange={() => {}}
              max={54}
              name={continent}
              type="range"
              value={count}
            />

            <span className={styles.count}>{count}</span>

            <LineBreaker />
          </Fragment>
        ))}
      </div>
    );
  return null;
}
