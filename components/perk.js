import React from 'react';
import styles from '@/styles/volunteer.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';

class Perk extends React.Component {
  render() {
    return (
      <ScrollAnimation animateIn='fadeIn'>
        <div className={styles.perk}>
          <img src={this.props.src} />
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </ScrollAnimation>
    );
  }
}

export default Perk;
