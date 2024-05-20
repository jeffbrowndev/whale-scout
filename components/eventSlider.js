import React from 'react';
import styles from '@/styles/eventSlider.module.scss';
import Event from './event';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const EventSlider = (props) => {
  if (props.events.length > 0) {
    props.events.sort((a, b) => {
      return new Date(a.acf.date) - new Date(b.acf.date);
    });

    const desktopSlides = () => {
      if (props.events.length > 3) 
      {
        return 3;
      }

      return props.events.length;
    }

    const desktopSmallSlides = () => {
      if (props.events.length > 2) 
      {
        return 2;
      }

      return 1;
    }

    return (
      <div className={styles.event_slider_wrapper}>
        <h1>Upcoming Events</h1>
        <div className={styles.event_slider}>
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={{
              desktopLarge: {
                breakpoint: { max: 3000, min: 1250 },
                items: desktopSlides(),
                slidesToSlide: 1
              },
              desktopSmall: {
                breakpoint: { max: 1250, min: 675 },
                items: desktopSmallSlides(),
                slidesToSlide: 1
              },
              mobileAndTablet: {
                breakpoint: { max: 875, min: 0 },
                items: 1,
                slidesToSlide: 1
              }
            }}
            ssr={true}
            infinite={true}
            containerClass='event_slider'>
            {props.events.map(event => {
              return (
                <Event
                  key={event.id}
                  slug={event.slug}
                  title={event.acf.title}
                  date={event.acf.date}
                  description={event.acf.excerpt}
                  image={event.acf.image}/>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  } 
  else {
    return (
      <div className={styles.event_slider_wrapper}>
        <h1>Upcoming Events</h1>
        <div className={styles.event_slider}>
          <h1>
            No events are currently&nbsp;scheduled. <br />
            Please check back&nbsp;later!
          </h1>
        </div>
      </div>
    );
  }
}

export default EventSlider;