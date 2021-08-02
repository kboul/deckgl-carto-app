import { Fragment } from 'react';

import { Alert, Input, LineBreaker } from '../../components';
import { getSelectedContinentsNumber, sortObjArrayByProperty } from './utils';
import { useApi } from '../../hooks';
import WidgetsProps from './model';
import {
  barTooltip,
  baseUrl,
  countriesAlertMsg,
  countriesEndpoint,
  countriesLoader
} from './constants';
import styles from './styles.module.sass';

export default function Widgets({
  selectedContinents,
  setValue
}: WidgetsProps) {
  const {
    data,
    loading: countriesLoading,
    error: countriesError
  } = useApi(`${baseUrl}${countriesEndpoint}`);
  const countries = sortObjArrayByProperty(data, 'continent');

  // eslint-disable-next-line consistent-return
  const handleBarChange = (continent: string) => () => {
    let newSelectedContinents: string[];

    if (selectedContinents.includes(continent)) {
      newSelectedContinents = selectedContinents.filter(
        selectedContinent => selectedContinent !== continent
      );
    } else newSelectedContinents = [...selectedContinents, continent];

    setValue('selectedContinents', newSelectedContinents);
  };

  if (countriesLoading)
    return <div className={styles.countriesLoader}>{countriesLoader}</div>;

  if (countries.length > 0)
    return (
      <>
        <h3 className={styles.header}>Continent</h3>

        <div className={styles.selContNum}>
          {getSelectedContinentsNumber(selectedContinents)}
        </div>

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
                className={styles.barInput}
                onChange={handleBarChange(continent)}
                max={54}
                name={continent}
                style={{
                  opacity: selectedContinents.includes(continent) ? 0.5 : 1
                }}
                title={barTooltip}
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
