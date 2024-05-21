import Layout from "@/components/layout";
import styles from '@/styles/restorationSites.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktopLarge: {
    breakpoint: { max: 3000, min: 1250 },
    items: 3,
    slidesToSlide: 1
  },
  desktopSmall: {
    breakpoint: { max: 1250, min: 675 },
    items: 2,
    slidesToSlide: 1
  },
  mobileAndTablet: {
    breakpoint: { max: 875, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const FormerWayneGolfCourse = () => {
  return (
    <Layout>
      <div className={styles.volunteer}>
        <div className={styles.golf_course_header}>
          <ScrollAnimation animateIn='fadeIn'>
            <div className={styles.volunteer_header_text}>
              <h1>FORMER WAYNE GOLF&nbsp;COURSE</h1>
            </div>
          </ScrollAnimation>
        </div>
        <div className={styles.spacer}></div>
        <div className="article_container" id={styles.act_flex}>
          <div className="article_section">
            <h1>Project Background</h1>
            <div className="line" />
            <p>
              Since 2019, Whale Scout has been working in partnership with <Link target="_blank" href="https://www.bothellwa.gov/249/Parks-Recreation">Bothell Parks and Recreation</Link> to 
              help restore habitat at the Former Wayne Golf Course.  The  89-acre property is located along 
              the Sammamish River near highway 522 in Bothell, WA.  At the time of Euro-American settlement, 
              members of the Duwamish Tribe hunted and traveled along the river.  Beginning in the 1870s and 
              continuing until around the turn of the century, the area was logged and transitioned into agricultural use. 
              In 1931, the golf course opened and remained a popular destination for local residents throughout the 
              20th century. In 2014, the owners announced that the Wayne Golf Course was shutting down, and the land was slated for development. 
              Local community members formed <Link target="_blank" href="https://onebothell.org/">OneBothell</Link> to protect the property, and with help from Forterra, a land preservation nonprofit, 
              and King County, it was purchased at the end of 2017 by the <Link target="_blank" href="https://www.bothellwa.gov/">City of Bothell</Link>. Today, this land is Bothell’s largest park. 
            </p>
          </div>
          <img src="restoration_sites/golf_course/wayne_top_view.jpg" />
        </div>
        <div className="article_container" id={styles.act_flex}>
          <div className="article_section">
            <h1>Project Goals</h1>
            <div className="line" />
            <p>
              Whale Scout is engaging the community to restore critical riparian habitat at the new park, removing 
              invasive plants including Himalayan blackberries and English Ivy, and replacing them with native trees. 
              The long-term goal is to improve water quality by increasing tree canopy cover, shading the water and improving ecological function. 
              This habitat benefits threatened Puget Sound salmon, whose numbers are currently at less than 10% of their historical peak. 
              Restoration also benefits Southern Resident Killer Whales, a critically-endangered community of less than 75 orcas, who rely 
              on salmon as their primary source of prey. While helping endangered salmon and orcas are one reason to repair degraded habitat, 
              there are so many more. Restoration also helps birds, pollinators, and reptiles, addresses climate change, and increases access 
              to public land and recreation, improving both physical and mental health in the community. 
            </p>
          </div>
        </div>
        <div className={styles.restoration_slider}>
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}>
              <img style={{width: "100%"}} src="restoration_sites/golf_course/slide1.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/golf_course/slide2.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/golf_course/slide6.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/golf_course/slide3.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/golf_course/slide4.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/golf_course/slide5.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/golf_course/slide7.jpg" />
          </Carousel>
        </div>
        <div className="article_container" id={styles.act_noFlex}>
          <div className="article_section">
            <h1>What's your "why"?</h1>
            <div className="line" />
            <p>
              Did you know you can participate in the restoration process? Volunteers of all ages and physical abilities help out at 
              events on a near-weekly basis planting trees, removing invasive plants, and watering. You can volunteer individually, 
              with your entire family, or <Link href="/contact">request a private event</Link>. For more information on volunteering opportunities please <Link href="/act">click here</Link>.
              <br />
              <br />
              Learn more about the <Link target="_blank" href="https://www.bothellwa.gov/2075/Sammamish-River-Waynita-Creek-Restoratio">Sammamish River and Waynita Creek restoration</Link> project 
              taking place on the east side of the park, led by the City of Bothell.
              <br />
              <br />
              
            </p>
            <h3>Follow our illustrated journal of restoration work <Link href="https://www.whalescout.org/article?slug=former-wayne-golf-course-riparian-restoration">here</Link>.</h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FormerWayneGolfCourse;