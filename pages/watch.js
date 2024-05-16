import Layout from '../components/layout';
import styles from '@/styles/watch.module.scss';

const Watch = () => (
  <Layout>
    <div className={styles.watch}>
      <div className={styles.watch_header_container}>
        <div className={styles.watch_header}>
          <div className={styles.watch_header_image}>
            <img
              src="watching.jpg"
            />
            <div className={styles.square} />
          </div>
          <div className={styles.watch_header_text}>
            <div className="article_container">
              <div className="article_section">
                <h1>Land-Based Whale&nbsp;Watching</h1>
                <p>
                  Meet up with an expert Whale Scout volunteer naturalist at a
                  local beach to watch whales. Our team of over 50 volunteers
                  are stationed throughout the Puget Sound region so there’s a
                  good chance you can meet up with one close to where you live.
                  Let us show you the whales and share more about them. We have
                  binoculars to share and educational materials if the whales
                  aren’t easily visible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.find_us}>
        <div className={styles.find_us_container}>
          <div className="article_container">
            <div className="article_section">
              <h1>Find Us</h1>
              <div className="line" />
              <h3>Opportunistically</h3>
              <p>
                Naturalists respond to whale sightings year-round offering land-based 
                whale watching experiences on an opportunistic basis throughout Puget Sound. 
                Follow <a href='https://www.facebook.com/orcanetwork' target='_blank'>
                  Orca Network
                </a> on Facebook to stay informed about the latest sightings 
                and contribute your own observations.
              </p>
            </div>
            <div className="article_section">
              <h3>Summer</h3>
              <p>
                Whale Scout is part of the San Juan Island Naturalist Program, a collaborative 
                effort to station naturalists on San Juan Island from Memorial Day through Labor Day. 
                Find us at the Westside Preserve, Lime Kiln State Park, and at campfire talks at the 
                San Juan County campground. Typically during summer months, resident orcas frequent 
                the area and often travel very close to shore. Learn more <a href='https://sjinaturalist.org/' target='_blank'>here</a>. 
              </p>
            </div>
            <div className="article_section">
              <h3>Special Events</h3>
              <p>
                Annual events where you can meet naturalists on the beach include Black Friday, or #OptOutside Day, and weekends in June celebrating Orca Month!
              </p>
            </div>
          </div>
        </div>
        <a className={styles.anchor} id='calendar' />
      </div>
      <div className={styles.watch_more}>
        <div className={styles.watch_more_image}>
          <img
            src="blue_vest.jpg"
          />
          <div className={styles.square} />
        </div>
        <div className="article_container" id={styles.watch_more_article}>
          <div className="article_section">
            <h3>What To Look For</h3>
            <p>
              Our volunteers can be recognized by their distinctive blue Whale Scout vests. 
              Feel free to ask them for help spotting wildlife or for more information
            </p>
          </div>
          <div className="article_section">
            <h3>What To Bring</h3>
            <p>
              Consider bringing binoculars, a spotting scope, or a camera. Also, make sure 
              to dress appropriately for the weather. The Pacific Northwest can be unpredictable, 
              so please be prepared.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Watch;