import styles from './Feedback.module.css';
import React, { Component } from 'react';
import Section from './Section';
import Controls from './FeedbackOptions';
import Statistic from './Statistic';
import Notification from './Notification';

class Feedback extends Component {
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

  onLeaveFeedback = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <div>
        <Section title={'Please leave feedback'} className="Section">
          <div className={styles.Controls}>
            <Controls
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </div>
        </Section>
        <div className={styles.Statistic}>
          <Section title={'Statistic'} className="Section">
            {!this.state.total && (
              <Notification message="No feedback given"></Notification>
            )}
            {this.state.total && (
              <Statistic
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.state.total}
                positivePercentage={this.state.positiveFeedbackPercentage}
              />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
export default Feedback;
