import React from "react";
import styles from "../styles/app.module.scss";

class CalendarEvent extends React.Component {
  render() {
    return (
      <div className={styles.calendar_event_container}>
        <div className={styles.calendar_dot} />
      </div>
    );
  }
}

export default CalendarEvent;
