import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const Controls = ({ options, onLeaveFeedback }) => {
  return options.map(type => {
    if (type !== 'positiveFeedbackPercentage' && type !== 'total') {
      return (
        <div key={type}>
          <button
            className={styles.buttons}
            type="button"
            onClick={() => {
              onLeaveFeedback(type);
            }}
          >
            {type}
          </button>
        </div>
      );
    } else {
      return console.log();
    }
  });
};

export default Controls;
Controls.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
