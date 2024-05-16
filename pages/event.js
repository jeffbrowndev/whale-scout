import Layout from '@/components/layout';
import fetch from 'isomorphic-unfetch';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/eventPage.module.scss';
import { useRouter } from 'next/router';

const Event = () => {
  const router = useRouter();
  const [event, setEvent] = useState({ body: {__html:""}, acf: {}  });

  useEffect(() => {
    fetch(`https://admin.whalescout.org/wp-json/wp/v2/posts?slug=${router.query.slug}`)
      .then(res => res.json())
      .then(event => setEvent({ 
        body: {__html:event[0].content.rendered.replace(/\n\n\n\n/g, '<br>')}, 
        acf: event[0].acf 
      }));
  }, [])

  return (
    <Layout>
      <div className={styles.event_content}>
        {event.acf.title ? <h1>{event.acf.title}</h1> : <h1>Helpin' Out Event!</h1>}
        {event.acf.location_name ? <h2>{`@ ${event.acf.location_name}`}</h2> : ''}
        <div className={styles.event_content} dangerouslySetInnerHTML={event.body} />
        {event.acf.image ? (
          <img src={event.acf.image} />
        ) : (
          <img src='./static/images/ws_home_header.svg' />
        )}
        {event.acf.image_caption ? (
          <p className={styles.event_caption}>{event.acf.image_caption}</p>
        ) : (
          ''
        )}
        <h3>Event Details:</h3>
        <ul>
          {event.acf.date ? <li>{`Date: ${event.acf.date}`}</li> : ''}
          {event.acf.start_time ? (
            <li>
              {`Time: ${event.acf.start_time}`}
              {event.acf.end_time ? <span>{` - ${event.acf.end_time}`}</span> : ''}
            </li>
          ) : (
            'Check back for details!'
          )}
          {event.acf.location_name ? (
            <li>
              {`Location: ${event.acf.location_name}`}
              {event.acf.location_address ? (
                <span>{`, ${event.acf.location_address}`}</span>
              ) : (
                ''
              )}
            </li>
          ) : (
            'Check back for details!'
          )}
          {event.acf.what_to_bring ? (
            <li>{`What to bring: ${event.acf.what_to_bring}`}</li>
          ) : (
            ''
          )}
          {event.acf.provided ? <li>{`Provided: ${event.acf.provided}`}</li> : ''}
          {event.acf.age_restrictions > 0 ? (
            <li>{`Youth under the age of ${
              event.acf.age_restrictions
            } must be accompanied by an adult or guardian.`}</li>
          ) : (
            <li>All ages welcome!</li>
          )}
          {event.acf.youth_waiver_form ? <li /> : <li />}
          {event.acf.facebook_link ? (
            <a href={event.acf.facebook_link} target='_blank'>
              <li>View this event on Facebook</li>
            </a>
          ) : (
            ''
          )}
          {event.acf.partners_supporters ? (
            <li>{`Partners/supporters for this event: ${
              event.acf.partners_supporters
            }`}</li>
          ) : (
            ''
          )}
          {event.acf.sign_up ? (
            <li>
              Space will be limited!{' '}
              <a href={event.acf.sign_up} target='_blank'>
                Sign up required
              </a>
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
    </Layout>
  )
}

export default Event;