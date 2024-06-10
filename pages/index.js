import React from 'react';
import Layout from "@/components/layout";
import fetch from 'isomorphic-unfetch';
import styles from "@/styles/home.module.scss";
import EventSlider from "@/components/eventSlider";
import Link from 'next/link';
import BlogPost from '@/components/blogPost';
import ScrollAnimation from 'react-animate-on-scroll';
import Image from "next/image";
import fish from "@/public/ws_home_subheader_fish.svg";
import volunteers from "@/public/ws_home_subheader_volunteers.svg";
import whale from "@/public/ws_home_whale.svg";
import Head from 'next/head';

export const getStaticProps = async () => {
  const event_data = await fetch(
    `https://admin.whalescout.org/wp-json/wp/v2/posts?categories=2`
  ).then((events) => events.json());

  const events = event_data.filter(
    (event) => new Date(event.acf.date) >= Date.now()
  );

  const news = await fetch(
    `https://admin.whalescout.org/wp-json/wp/v2/posts?categories=3`
  ).then((news) => news.json());

  news.length = 5;

  return {
    props: { events, news }
  };
};

const App = props => {
  return (
      <div>
        <Head>
          <title>Whale Scout</title>
          <meta name="description" content="Whale Scout leads the public in land-based whale watching experiences and salmon habitat restoration projects."></meta>
          <meta name="keywords" content="Bothell Washington Volunteer Habitat Restoration Orca Killer Whale Salmon Community Service"></meta>
        </Head>
        <Layout credits={'Header photo: Jill Clogston | '} color='#a6d5cd'>
          <div className={styles.home}>
            <section className={styles.home_header}>
              <ScrollAnimation animateIn='fadeIn'>
                <h1>
                  Protecting <span>Pacific Northwest Whales</span> through land-based
                  conservation experiences.
                </h1>
              </ScrollAnimation>
            </section>
            <section className={styles.sub_header}>
              <div className={styles.what_we_do}>
                <Image src={fish} alt='Fish' />
                <div className={styles.description}>
                  <h2>What We Do...</h2>
                  <p>
                    Whale Scout leads the public in land-based whale watching
                    experiences. We channel people’s interest and passion about whales
                    into on the ground salmon habitat restoration projects protecting
                    the primary food source of struggling orcas in Puget Sound.{' '}
                  </p>
                </div>
              </div>
              <div className={styles.you_can_help}>
                <div className={styles.description}>
                  <h2>You Can Help!</h2>
                  <p>
                    Anyone can contribute by donating or volunteering at our Helpin'
                    Out Events.
                  </p>
                  <Link href='/donate'>
                    <button className="main_button">DONATE</button>
                  </Link>
                  <Link href='/act'>
                    <button className="main_button">VOLUNTEER</button>
                  </Link>
                </div>
                <Image src={volunteers} alt='Volunteers' />
              </div>
              <div className={styles.whalescout_video}>
                <div className={styles.video_wrapper}>
                  <iframe
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/pwMDH491Haw'
                    allowFullScreen
                  />
                </div>
              </div>
            </section>
            <section className={styles.home_events_feed}>
              <EventSlider events={props.events} />
            </section>
            <section className={styles.home_news_and_podcasts}>
              <div className={styles.recent_news}>
                <div className={styles.recent_header}>
                  <h3>Blog</h3>
                </div>
                {props.news.map((article) => (
                  <BlogPost
                    key={article.id}
                    date={article.date}
                    title={article.title.rendered}
                    content={article.content.rendered}
                    image={article.acf.featured_image.url}
                    slug={article.slug}
                  />
                ))}
              </div>
            </section>
          </div>
          <Image
            className={styles.home_footer_image}
            src={whale}
            alt='Whale'
          />
        </Layout>
      </div>
  )
};

export default App;