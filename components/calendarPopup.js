import React from "react";
import styles from "../styles/app.module.scss";
const moment = require("moment");

class CalendarPopup extends React.Component {
  render() {
    return (
      <div className={styles.calendar_popup}>
        <h3 onClick={this.props.closePopup}>CLOSE</h3>
        <div className={styles.popup_content}>
          <h4>{this.props.event.title}</h4>
          <p>{moment(this.props.event.start).format("LL")}</p>
          <p>{this.props.event.location}</p>
          <p>{`${moment(this.props.event.start).format("LT")} - ${moment(
            this.props.event.end
          ).format("LT")}`}</p>
          <p className={styles.popup_desc}>{this.props.event.desc}</p>
        </div>
      </div>
    );
  }
}

export default CalendarPopup;
