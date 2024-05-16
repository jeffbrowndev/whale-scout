import React from 'react';
import styles from '../styles/event.module.scss';
import Link from 'next/link';

const Event = props => {
  const imageSrc = {
    backgroundImage: `url(${props.image})`
  };

  const displayTitle = () => {
    if (!props.title) {
      return "Helpin' Out Event!";
    }

    if (props.title.length > 40) {
      return props.title.substr(0, 40) + "...";
    }
  
    return props.title;
  }

  const displayDiscription = () => {
    if (!props.description) {
      return "No description provided.";
    }

    if (props.description.length > 80) {
      return props.description.substr(0, 80) + "...";
    }
  
    return props.description;
  }
    
  return (
    <div className={styles.event}>
      <div className={styles.event_header} style={imageSrc}>
        <div className={styles.event_date_banner}>
          <div className={styles.event_date}>{props.date}</div>
          <div className={styles.tail} />
        </div>
      </div>
      <div className={styles.event_footer}>
        <div className={styles.event_footer_content}>
          <h4>{displayTitle()}</h4>
          <p>{displayDiscription()}</p>
          <Link href={`/event?slug=${props.slug}`}>
            <button>VIEW DETAILS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Event;