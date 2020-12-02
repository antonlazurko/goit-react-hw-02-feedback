import styles from './Statistic.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const Statistic = props => {
  const types = Object.keys(props);
  return types.map(type => {
    return (
      <div key={type}>
        <span className="Counter__value">
          {type}:{props[type]}
          {props[type] === 'Positive Feedback' && '%'}
        </span>
      </div>
    );
  });
};

export default Statistic;
Statistic.propTypes = {
  props: PropTypes.arrayOf(PropTypes.string),
};
