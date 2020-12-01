import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

// const Controls = ({ onGoodFeedback, onNeutralFeedback, onBadFeedback }) => {
const Controls = ({ feedback, feedbackName }) => {
  return (
    <div>
      <button type="button" onClick={feedback}>
        {feedbackName}
      </button>
      {/* <p>Please leave feedback</p>
      <button type="button" onClick={onGoodFeedback}>
        Good
      </button>
      <button type="button" onClick={onNeutralFeedback}>
        Neutral
      </button>
      <button type="button" onClick={onBadFeedback}>
        Bad
      </button> */}
    </div>
  );
};
export default Controls;
Controls.propTypes = {
  feedback: PropTypes.func,
  feedbackName: PropTypes.string,
};
