import BigCalendar from "react-big-calendar";
import moment from "moment";
import React from "react";
import styles from "../styles/app.module.scss";
import { getEvents } from "../../gcal";
import CalendarEvent from "./calendarEvent";
import CalendarPopup from "./calendarPopup";

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      selectedEvent: undefined,
      popupActive: false
    };
  }
  componentDidMount() {
    getEvents(events => {
      this.setState({ events });
    });
  }
  openPopup(event) {
    this.setState({ popupActive: true, selectedEvent: event });
  }
  closePopup() {
    this.setState({ popupActive: false });
  }
  render() {
    if (this.state.popupActive) {
      return (
        <div className={styles.calendar_container}>
          <BigCalendar
            localizer={localizer}
            events={this.state.events}
            views={["month"]}
            components={{
              event: CalendarEvent
            }}
            onSelectEvent={event => this.openPopup(event)}
          />
          <CalendarPopup
            event={this.state.selectedEvent}
            closePopup={this.closePopup.bind(this)}
          />
        </div>
      );
    } else {
      return (
        <div className={styles.calendar_container}>
          <BigCalendar
            localizer={localizer}
            events={this.state.events}
            views={["month"]}
            components={{
              event: CalendarEvent
            }}
            onSelectEvent={event => this.openPopup(event)}
          />
        </div>
      );
    }
  }
}

export default Calendar;
