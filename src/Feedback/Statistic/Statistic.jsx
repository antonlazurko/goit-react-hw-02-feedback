import styles from './Statistic.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const Statistic = props => {
  const types = Object.keys(props);
  return types.map(type => {
    return (
      <div key={type} className={styles.stats}>
        <span className={styles.type}>
          {type === 'positivePercentage'
            ? 'POSITIVE PERCENTAGE'
            : type.toUpperCase()}
          :
          <span className={styles.value}>
            {props[type]}

            {type === 'positivePercentage' && '%'}
          </span>
        </span>
      </div>
    );
  });
};

export default Statistic;
Statistic.propTypes = {
  props: PropTypes.arrayOf(PropTypes.string),
};
