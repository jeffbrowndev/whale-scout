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

const BearCreek = () => {
  return (
    <Layout>
      <div className={styles.volunteer}>
        <div className={styles.bear_creek_header}>
          <ScrollAnimation animateIn='fadeIn'>
            <div className={styles.volunteer_header_text}>
              <h1>BEAR CREEK</h1>
            </div>
          </ScrollAnimation>
        </div>
        <div className={styles.spacer}></div>
        <div className="article_container" id={styles.act_flex}>
          <div className="article_section">
            <h1>Project Background</h1>
            <div className="line" />
            <p>
              Whale Scout has been working on restoring a private property along the banks of Bear Creek in Redmond, WA, since fall of 2019. 
              This property has been owned by the same family since 1930 and previously was used as a hunting, fishing, and gathering ground 
              by the Coast Salish people. At the time of the family’s purchase, the property had just recently been logged and there were very 
              few trees remaining. Over the years, the land went from a grassy field to dense thickets of Himalayan blackberry bushes, reed 
              canary grass, creeping buttercup, morning glory and groves of willow trees. Supported by a grant from The Nature Conservancy, 
              Whale Scout  organized volunteer community restoration work parties to diligently remove the blackberry bushes (root balls and all!!!) 
              and other invasives. As areas were cleared of these invasives, native trees, shrubs and groundcovers were planted. 
            </p>
          </div>
          <img src="restoration_sites/bear_creek/bear_creek_plant.jpg" />
        </div>
        <div className="article_container" id={styles.act_flex}>
          <div className="article_section">
            <h1>How are we helping?</h1>
            <div className="line" />
            <p>
              It has been exciting to see how this property has developed into a thriving, lush riparian habitat with rapidly growing Douglas 
              fir, western red cedar, grand fir, sitka spruce, big leaf maple, red alder, Douglas spirea, nootka & bald hip roses, salmonberry, 
              snowberry, thimbleberry, ninebark and many other native shrubs and groundcovers. Because of the flooding during the fall and winter 
              months, willow stakes from the property have been cut and planted along the creek to help stabilize the banks and to prevent erosion. 
              Willow stakes are also planted along the banks as gifts for the beavers who frequent the property. We have had to cage most of the 
              trees in order to save them from being taken by our very, very important resident beavers. The beavers do enjoy removing many of the planted willow stakes! 
              <br />
              <br />
              Bear Creek is one of the best quality creeks that support spawning and rearing Chinook and sockeye salmon in the area. By creating 
              this lush, thriving riparian zone on this private property, we are continuing to improve the water quality of Bear Creek. As the trees 
              and shrubs continue to grow, they provide more shade to cool the water.  All of this helps improve the habitat for salmon which in 
              turn will increase the numbers of salmon returning to the ocean to feed our struggling Southern Resident Killer Whales.
            </p>
          </div>
        </div>
        <div className={styles.restoration_slider}>
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}>
              <img style={{width: "100%"}} src="restoration_sites/bear_creek/slide1.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/bear_creek/slide7.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/bear_creek/slide3.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/bear_creek/slide4.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/bear_creek/slide5.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/bear_creek/slide6.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/bear_creek/slide2.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/bear_creek/slide8.jpg" />
              <img style={{width: "100%"}} src="restoration_sites/bear_creek/slide9.jpg" />
          </Carousel>
        </div>
        <div className="article_container" id={styles.act_noFlex}>
          <div className="article_section">
            <h1>Additional Information</h1>
            <div className="line" />
            <p>
              This site also plays host to many student interns who have learned techniques for maintaining 
              restoration sites and monitoring vegetation health. Salmon viewing tours are offered each fall 
              as this special place showcases salmon migration and spawning in a very visible and accessible 
              way. If you are interested in seeing how your property can be transformed into a lush oasis for 
              salmon and yourself, we would love to give you a tour! <Link href="/contact">Contact us</Link> for more information. 
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BearCreek;