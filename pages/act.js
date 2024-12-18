import Layout from '../components/layout';
import EventSlider from '../components/eventSlider';
import styles from '@/styles/act.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

export const getServerSideProps = async () => {
  const event_data = await fetch(
    `https://login.whalescout.org/wp-json/wp/v2/posts?categories=2`
  ).then(events => events.json());

  const events = event_data.filter(
    event => new Date(event.acf.date) >= Date.now()
  );

  return { props: { events } };
}; 

const Act = props => (
  <Layout>
    <div className={styles.volunteer}>
      <div className={styles.volunteer_header}>
        <ScrollAnimation animateIn='fadeIn'>
          <div className={styles.volunteer_header_text}>
            <h1>VOLUNTEER</h1>
            <h2>Anyone can help!</h2>
          </div>
        </ScrollAnimation>
      </div>
      <div className="article_container" id={styles.act_noFlex}>
        <div className="article_section">
          <h1>Get Your Hands Dirty!</h1>
          <div className="line" />
          <p>
            If you care about whales and want to help, you are probably closer to the solutions than you might think! 
            Since endangered Southern Resident killer whales need more salmon to survive, and these salmon live 
            throughout the rivers and streams along the West Coast, what happens in your backyard matters. Join us 
            at “Helpin’ Out” events where you can get your hands dirty helping salmon survive to become orca food.
            <br />
            <br />
            Whale Scout offers “Helpin’ Out” events throughout the year in the Puget Sound region. The majority 
            of these are open to the public so anyone can join in planting native trees, removing invasive plants, 
            and restoring salmon habitat. Some of this work is done on private property, and others with our partners 
            on public lands. All of it helps make more Chinook salmon for the whales to eat. Learn more about how 
            these events help salmon in the <Link href='/learn'>Learn Section</Link>. Scroll down to see a list
            of all our upcoming events. We provide all the tools and
            equipment! Your help makes a huge difference.
          </p>
        </div>
      </div>
      <div className="article_container" id={styles.act_flex}>
        <img src="planting2.jpg" />
        <div className="article_section">
          <h1>Featured Restoration Sites</h1>
          <div className="line" />
          <div className={styles.restoration_links}>
            <Link href="/bearCreek"><h3>Bear Creek | Redmond, WA</h3></Link>
            <Link href="/formerWayneGolfCourse"><h3>Former Wayne Golf Course | Bothell, WA</h3></Link>
          </div>
        </div>
      </div>
      <EventSlider events={props.events} />
      <div style={{paddingTop: "50px"}}></div>
      <div className="article_container" id={styles.act_flex}>
        <div className="article_section">
          <h1>Private Events</h1>
          <div className="line" />
          <p>
            Schedule a special volunteer event for your school, church, club, business, scout group, etc. 
            We can host anywhere from 5 to 125 people with all ages welcome. We provide all the tools and supplies 
            that you will need for a fun, meaningful experience. To inquire about dates and locations within King County, 
            email <a href="mailto:director@whalescout.org">director@whalescout.org</a>.
            <br/>
            <br/>
            <strong>Don’t see an event near you? Use our <Link href="https://www.podmatch.org/" target='_blank'>PodMatch</Link> tool 
            to connect with a salmon habitat restoration project near you - anywhere between California to Canada!</strong>
          </p>
        </div>
        <img src="planting.jpg" />
      </div>
    </div>
  </Layout>
);

export default Act;