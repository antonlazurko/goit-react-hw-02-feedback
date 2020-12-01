import styles from './Feedback.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import Controls from './Controls';
import Statistic from './Statistic';
import Notification from './Notification';

class Feedback extends Component {
  static defaultProps = { initialValue: 0 };
  static propTypes = { initialValue: PropTypes.number.isRequired };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedbackPercentage: 0,
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positiveFeedbackPercentage: Math.round(
          (prevState.good / prevState.total) * 100,
        ),
      };
    });
  };
  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.total + 1,
      };
    });
  };
  goodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  neutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  badFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          {/* <Controls
            feedbacks={[
              { good: this.goodFeedback },
              { neutral: this.neutralFeedback },
              { bad: this.badFeedback },
            ]}
            feedbackName={['good', 'neutral', 'bad']}
          /> */}

          <Controls feedback={this.goodFeedback} feedbackName={'good'} />
          <Controls feedback={this.neutralFeedback} feedbackName={'neutral'} />
          <Controls feedback={this.badFeedback} feedbackName={'bad'} />
        </Section>
        <Section title={'Statistic'}>
          {!this.state.total && (
            <Notification message="No feedback given"></Notification>
          )}
          {this.state.total && (
            <div>
              <Statistic value={this.state.good} statName={'Good'} />
              <Statistic value={this.state.neutral} statName={'Neutral'} />
              <Statistic value={this.state.bad} statName={'Bad'} />
              <Statistic value={this.state.total} statName={'Total'} />{' '}
              <Statistic
                value={this.state.positiveFeedbackPercentage}
                statName={'Positive Feedback'}
              />
            </div>
          )}
        </Section>
      </div>
      // <div>
      //  <Section title={'Please leave feedback'} />
      //   <Section title={'Statistic'} ></Section>
      // </div>
      // <div className="Feedback">
      // <Controls feedback={this.goodFeedback} feedbackName={'good'} />
      // <Controls feedback={this.neutralFeedback} feedbackName={'neutral'} />
      // <Controls feedback={this.badFeedback} feedbackName={'bad'} />
      //   {/* <Controls
      //     onGoodFeedback={this.goodFeedback}
      //     onNeutralFeedback={this.neutralFeedback}
      //     onBadFeedback={this.badFeedback}
      //   /> */}
      // {!this.state.total && (
      //   <Notification message="No feedback given"></Notification>
      // )}
      //   {this.state.total && (
      //     <div>
      // <Statistic value={this.state.good} statName={'Good'} />
      // <Statistic value={this.state.neutral} statName={'Neutral'} />
      // <Statistic value={this.state.bad} statName={'Bad'} />
      // <Statistic value={this.state.total} statName={'Total'} />{' '}
      // <Statistic
      //   value={this.state.positiveFeedbackPercentage}
      //   statName={'Positive Feedback'}
      // />
      //     </div>
      //   )}
      // </div>
    );
  }
}
export default Feedback;
