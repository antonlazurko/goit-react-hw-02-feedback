import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const Controls = ({ options, onLeaveFeedback }) => {
  return options.map(type => {
    if (type !== 'positiveFeedbackPercentage' && type !== 'total') {
      return (
        <div key={type}>
          <button
            type="button"
            onClick={() => {
              onLeaveFeedback(type);
            }}
          >
            {type}
          </button>
        </div>
      );
    }
  });
};

export default Controls;
Controls.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
