import { Fragment } from 'react';

import { Alert, Input, LineBreaker } from '../../components';
import { sortObjArrByProperty } from './utils';
import { useApi } from '../../hooks';
import {
  baseUrl,
  countriesAlertMsg,
  countriesEndpoint,
  countriesLoader
} from './constants';
import styles from './styles.module.sass';

export default function Widgets() {
  const {
    data,
    loading: countriesLoading,
    error: countriesError
  } = useApi(`${baseUrl}${countriesEndpoint}`);
  const countries = sortObjArrByProperty(data, 'continent');

  if (countriesLoading && countries.length === 0)
    return <div className={styles.countriesLoader}>{countriesLoader}</div>;

  if (countries.length > 0)
    return (
      <>
        <h3 className={styles.header}>Continent</h3>

        <div className={styles.barsContainer}>
          {countries.map(({ continent, count }, index) => (
            <Fragment key={`range-${index}`}>
              <div className={styles.flex}>
                <span className={styles.continent}>
                  {continent.toUpperCase()}
                </span>
                <span className={styles.count}>{count}</span>
              </div>

              <Input
                label=""
                onChange={() => {}}
                max={54}
                name={continent}
                type="range"
                value={count}
              />

              <LineBreaker />
            </Fragment>
          ))}
        </div>
        <hr />
      </>
    );

  if (countriesError) return <Alert>{countriesAlertMsg}</Alert>;

  return null;
}
