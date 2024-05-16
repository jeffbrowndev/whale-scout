import React from 'react';
import styles from '@/styles/orcaHero.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';

class Month extends React.Component {
  render() {
    return (
      <div className={styles.month}>
        <ScrollAnimation animateIn='fadeIn'>
          <img src={this.props.src} />
        </ScrollAnimation>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Month;
