import { Fragment } from 'react';

import { Alert, Input, LineBreaker } from '../../components';
import Loader from './Loader';
import {
  arrObjsMaxAttrValue,
  getContinentPopulation,
  getSelectedContinentsNumber
} from './utils';
import { useApi } from '../../hooks';
import WidgetsProps from './model';
import * as consts from './constants';
import styles from './styles.module.sass';

export default function Widgets({
  selectedContinents,
  setValue
}: WidgetsProps) {
  const {
    data: countries,
    loading: countriesLoading,
    error: countriesError
  } = useApi(consts.countriesSqlOperation);

  const {
    data: population,
    loading: populationLoading,
    error: populationError
  } = useApi(consts.populationSqlOperation);

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

  if (countriesLoading || populationLoading)
    return (
      <>
        <Loader>{consts.countriesLoaderMsg}</Loader>
        <Loader>{consts.populationLoaderMsg}</Loader>
      </>
    );

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
                max={arrObjsMaxAttrValue(countries, 'count')}
                name={continent}
                style={{
                  opacity: selectedContinents.includes(continent) ? 0.5 : 1
                }}
                title={consts.barTooltip}
                type="range"
                value={count}
              />

              <div
                className={
                  styles.population
                }>{`Population: ${getContinentPopulation(
                population,
                continent
              )}`}</div>

              <LineBreaker />
            </Fragment>
          ))}
        </div>
        <hr />
      </>
    );

  if (countriesError) return <Alert>{consts.countriesAlertMsg}</Alert>;
  if (populationError) return <Alert>{consts.populationAlertMsg}</Alert>;

  return null;
}
