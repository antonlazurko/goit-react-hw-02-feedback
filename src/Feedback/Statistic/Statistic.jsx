import styles from './Statistic.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ value, statName }) => {
  return (
    <div>
      <span className="Counter__value">
        {statName}:{value}
        {statName === 'Positive Feedback' && '%'}
      </span>
    </div>
  );
};
export default Statistic;
Statistic.propTypes = {
  value: PropTypes.number,
  statName: PropTypes.string,
};
