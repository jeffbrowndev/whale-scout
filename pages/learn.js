import Layout from '@/components/layout';
import styles from '@/styles/learn.module.scss';
// import Composition from '@/components/composition';
import Threats from '@/components/threats';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

const Learn = () => (
  <Layout>
    <div className={styles.learn}>
      <div className={styles.learn_header}>
        <ScrollAnimation animateIn='fadeIn'>
          <h1>LEARN</h1>
        </ScrollAnimation>
      </div>
      <div className={styles.learn_container}>
        <div className="article_container">
          <div className="article_section">
            <h1>Orcas, salmon, and the Pacific Northwest</h1>
            <div className="line" />
            <p>
              Salmon have lived in the Pacific Northwest for millions of years
              diversifying into different species: Pink, Coho, Chum, Sockeye, and
              the largest of all Pacific salmon — Chinook. To better understand
              the relationship the Southern Resident orcas have with salmon, we
              need to travel back in time. About 13,000 years ago, the last
              glaciers that carved out our majestic mountains had finally receded.
              They left in their wake furrowed land that was rich with moisture,
              glacial sediment, smooth broken stones, and fresh cold water that
              would form our rivers. The abundance of moisture in the soil gave
              birth to the towering trees and native plants that shade, filter,
              stabilize, and oxygenate the riverbeds to this day. Salmon that had
              retreated further south during the last ice age re-expanded north to
              newly created spawning habitat. For the last 13,000 years, the
              clean, covered, nutritive cold water with smooth rocks to shelter
              fertilized eggs allowed these fish to thrive.
            </p>
          </div>
          <img
            src={`https://admin.whalescout.org/wp-content/uploads/2019/03/chinook.jpg"`}
          />
          <p className="image_caption">Georgia Strait Alliance</p>
          <div className="article_section">
            <p>
              The temperate forest ecosystem of the Pacific Northwest developed
              into one giant living biological organism with rivers serving as the
              arteries and veins transporting the red blood cells—salmon—upriver
              where they spawn the next generation of salmon. This giant inland
              organism evolved around the presence of Pacific salmon. Over 200
              species of plants, birds, and mammals (terrestrial and marine alike)
              depend on salmon for survival. Once salmon have reached their
              spawning grounds, bears and eagles pluck adult salmon from the river
              to eat, often leaving the nitrogen, carbon, and phosphorous rich
              carcasses behind on the forest floor where they provide nourishment
              to the giant Douglas Firs and Western Hemlock trees. In return,
              these towering trees shade and protect the river, making it
              habitable for fish.
            </p>
          </div>
          <img
            src={`https://admin.whalescout.org/wp-content/uploads/2019/03/sockeye.jpg"`}
          />
          <p className="image_caption">
            Sockeye Salmon in the Adams River, Department of Fisheries and Oceans
            Canada
          </p>
          <div className="article_section">
            <p>
              As salmon migrated across the northeast Pacific for thousands of
              years, some of the ocean’s top predators, orcas and pinnipeds,
              evolved with them. Pinnipeds, such as harbor seals and sea lions,
              eat a wide variety of fish aside from salmon including rockfish,
              herring, smelt, and squid. Today, as large numbers of pinnipeds
              inhabit the coastal waters of the north Pacific, one major ecotype
              of orca—known as the Transient killer whale — is also flourishing.
              Transient killer whales travel in family pods made up of five or six
              individuals, usually a mother and her offspring. They occasionally
              group together with other pods of orcas, related or not, in order to
              reproduce, socialize, and hunt. The diets of these killer whales
              also include other large whales and porpoises.
              <br />
              <br />
              The Resident ecotype of killer whale thrives off the nutrient-dense,
              forest-fed waters off the Pacific West Coast. Two distinct
              communities with somewhat overlapping territories exist in Canada
              and the U.S., Northern Residents and Southern Residents. Both rely
              on salmon—mostly Chinook. Southern Residents are the main focus of
              Whale Scout’s programs and are made up of 3 matrilineal family pods
              (J, K, and L pods). Yet a third ecotype of killer whale exists in
              the Salish Sea: Offshore killer whales. Rarely seen, these whales
              are thought to eat mostly sharks, and as a result have worn-down
              teeth from the rough skin.
            </p>
          </div>
        </div>
        {/* <Composition />
        <p className={styles.composition_caption}>
          Data from the Center for{' '}
          <a target='_blank' href='https://www.whaleresearch.com/'>
            Whale Research
          </a>
        </p> */}
        <div className="article_container">
          <div className="article_section">
            <p>
              Over the last 150 years, Europeans developed the Salish Sea
              watershed for large-scale human habitation. We didn’t understand how
              our actions would alter the life of the majestic forest and sea
              surrounding us. Forests were cleared, beaches were walled up, and
              rivers were dammed to allow western civilization to flourish.
              Commercial fisheries were established to bolster the economy and the
              orcas were seen as vicious, voracious fishing competition. Our
              Western scientific understanding of killer whales was non-existent.
              Out of fear and misunderstanding, humans shot to kill orcas as
              recently as the 1960s. <br />
              <br />
              Beginning in the early 1960s, the marine park and aquarium industry
              was booming and began to target killer whales in Puget Sound.
              Capture teams patrolled Puget Sound by air and boat, searching for
              orcas. When a pod was located, the teams chased the whales into
              coves, often detonating underwater seal bombs to disorient and
              frighten them, making it easier to corral the group into a net pen
              and separate and remove the calves to be sold for captivity. It is
              unknown exactly how many whales were taken, but federal estimates
              put the number at around 50 individuals—mainly Southern Resident J
              and L pod individuals. Only one of the captured Southern Residents,
              named "Lolita" from L pod, is alive today; she is currently on
              display at the Miami Seaquarium.
            </p>
          </div>
          <img
            src={`https://admin.whalescout.org/wp-content/uploads/2019/03/captured.jpg"`}
          />
          <p className="image_caption">
            Members of L pod captured in Penn Cove, Wallie Funk, Associated Press
          </p>
          <div className="article_section">
            <p>
              In 1976, the horrific capture of a Transient orca pod (including the
              still wild-living matriarch T46) at Budd Inlet was witnessed by
              Ralph Munro, who, at the time, was an aid to Washington Governor
              Evans. Motivated by the horror of what he saw, the capture process
              was later outlawed in the state of Washington. As a result, the
              federal government hired biologists to study, count, and track local
              orca populations. Scientists, such as Michael Bigg and Ken Balcomb,
              began to unravel vibrant lives and cultures of the Salish Sea orcas,
              and our fear of these northwest icons was replaced with awe. <br />
              <br />
              As Ken Balcomb continued monitoring the orca population, he
              discovered that resident population numbers mirrored that of the
              salmon returns. In years when the salmon runs were strong, the
              resident orca population boomed. When the salmon runs were weak,
              more resident whales died. In 2005, the Southern Resident killer
              whale population were listed as endangered under the Endangered
              Species Act following a precipitous in numbers. Today, Southern
              Resident killer whales number fewer than when they were listed as
              endangered, a disappointing trend. The main cause of this decline is
              a lack of&nbsp;salmon.
            </p>
          </div>
          <img
            src={`https://admin.whalescout.org/wp-content/uploads/2019/03/graph.jpg"`}
          />
          <p className="image_caption">
            Annual indices of mortality of (a) northern and (b) southern resident
            killer whales and (c) abundance of Chinook salmon, 1979-2003.
            Deviations from an annual index value of 1 (a,b) indicate higher or
            lower than expected mortality rates. Annual abundance indices for
            Chinook salmon (c) reflect departures from the average abundance over
            the entire time series. Ford et al., 2009
          </p>
          <div className="article_section">
            <p>
              A well-fed orca has a thick layer of fat, also known as blubber.
              Aside from providing buoyancy and body heat control, the blubber
              layer is where an orca stores ingested pollutants. As top predators
              with long lives, any pollutants in the water (PCBs, DDT, flame
              retardants, etc.) bioaccumulate at the upper levels of the food
              chain. Well fed orcas store the pollutants in their blubber layer
              where their side effects are minimal. The Transient orcas of the
              Salish Sea have an abundant supply of pinnipeds and other marine
              mammals to feed upon and therefore are able to keep toxins stored
              away in their blubber. The Southern Residents, despite eating lower
              on the food chain (marine mammals vs. salmon), are more at risk to
              toxin exposure since they are metabolizing their blubber stores
              burning fat during times of low salmon abundance. These toxins are
              proven to disrupt immune and reproductive systems. Compounding these
              issues are vessel impacts. Underwater noise disrupts the whale's
              echolocation and communication.
            </p>
          </div>
        </div>
      </div>
      <Threats />
      <div className={styles.learn_container}>
        <div className="article_container">
          <div className="article_section">
            <p>
              To recover these endangered Southern Resident killer whales we must
              address these three main threats. Whale Scout’s programs address
              each one and provide ways for you to get involved. First, we offer
              ways to <Link href='/watch'>watch</Link> whales from shore without
              leaving any trace on our waters. Second, we help limit toxins from
              entering our waterways. We offer{' '}
              <Link href='/act#months'>suggestions</Link> each month to become
              better stewards of the environment, which add up to help the whales.
              Our “Helpin’ Out” events also limit toxins from entering our
              waterways through the natural treatment of stormwater runoff. At
              these events we plant trees and work to restore ecological function
              along salmon rivers, streams, and nearshore habitats. This provides
              salmon more places to live, spawn, and thrive. The more salmon there
              are, the more food killer whales have to eat. No matter where you
              live, you can make a difference with{' '}
              <Link href='https://www.podmatch.org'>PodMatch</Link>, through your
              donations, or via participation with groups throughout the west
              coast. <br />
              <br />
              We must keep in mind that we’re striving for intact ecosystems from
              the treetops to the outer coast. Not only will the whales benefit
              from resilient forests, rivers and streams, everyone else will too,
              including us. The work we do restoring salmon habitat results in
              cleaner water, air, and more salmon for everyone.
              <br />
              <br />
              Southern Resident killer whales have a broad range from Southeast
              Alaska to to Monterey, California. Some of these West Coast rivers
              extend hundreds of miles inland crossing the backyards and
              neighborhoods of major population centers. Unfortunately, many of
              these populations of salmon are also threatened or endangered.
            </p>
          </div>
          <img
            src={`https://admin.whalescout.org/wp-content/uploads/2019/03/salmon_map.svg"`}
          />
          <p className="image_caption" />
          <div className="article_section">
            <h1>
              What’s the Connection Between Planting Trees and Saving Whales?
            </h1>
            <div className="line" />
            <p>
              A significant amount of time spent at volunteer work parties or our
              "Helpin' Out" events involves restoring the "riparian zone," or
              vegetation immediately along salmon rivers and streams. You may ask,
              “Why is this important, and how does it help?” Well, with the help
              of our friends at the Skagit Fisheries Enhancement Group, we came up
              with a fun way to remember: 6 C's Thanks to Trees!
            </p>
            <br />
            <p>
              Trees improve important water quality features that salmon need to
              thrive.
            </p>
            <br />
            <p>
              <strong>Cool </strong>- Trees shade the water, keeping it cool in
              warm months
            </p>
            <br />
            <p>
              <strong>Clean </strong>- Vegetation and root systems filter toxins
              in rain runoff before entering into waterways
            </p>
            <br />
            <p>
              <strong>Clear </strong>- Complex root systems hold the banks of
              rivers and streams, preventing erosion which can smother salmon eggs
            </p>
            <br />
            <p>
              <strong>Constant </strong>- Consistently flowing waters are critical
              for salmon. Rushes and low drops in water levels don’t allow fish to
              move where they need to go or can scour out eggs embedded in
              streambeds. Rain is slowed down by tree branches and is stored in
              the ground beneath trees to slowly be released into the main
              channel.
            </p>
            <br />
            <p>
              <strong>Critters </strong>- The tiny bugs that baby salmon need to
              eat live on native vegetation. This gives the orca’s food’s food a
              place to thrive!
            </p>
            <br />
            <p>
              <strong>Cover </strong>- Towering trees and fallen logs offer adult
              migrating salmon some protection and refuge from predators such as
              birds who may be lurking above.
            </p>
            <br />
            <p>
              Many of our Helpin' Out events are supported by The Nature
              Conservancy. Planting trees in our cities helps our orcas because of
              the reasons above and to specifically reduce toxic stormwater which
              is harmful for salmon, orcas, and all of us.
            </p>
          </div>
          <img
            src={`https://admin.whalescout.org/wp-content/uploads/2019/03/how_were_helping.jpg"`}
          />
          <p className="image_caption">The Nature Conservancy</p>
          <div className="article_section">
            <h1>Additional Links & Resources</h1>
            <div className="line" />
            <a
              href='http://www.adfg.alaska.gov/index.cfm?adfg=wildlifenews.view_article&articles_id=407&fbclid=IwAR00bl7q7-1MasG0vXosVLD6EYicift8xXHo1X6bw__Ia4NLeDNF2Cs2HhM'
              target='_blank'
            >
              <p>Alaska Department of Fish and Game - Salmon and Trees</p>
            </a>
            <a
              href='https://www.nationalgeographic.org/encyclopedia/blubber/?fbclid=IwAR01p4oC2woY4Ibf_dRx7oHHiXM5ZYeXe4zopiKukhbrSEiEeBNf8uhU-eI'
              target='_blank'
            >
              <p>National Geographic - Blubber</p>
            </a>
            <a
              href='http://www.orcanetwork.org/nathist/OIOM2006edited.pdf'
              target='_blank'
            >
              <p>Orcas in Our Midst</p>
            </a>
            <a
              href='https://www.theolympian.com/news/local/article25320205.html?fbclid=IwAR1WgF5PqPH9R8USQUWc-mIDjXud3g0nqOW1cpaTBtxZZlBqajYemZyKvNc'
              target='_blank'
            >
              <p>The Olympian - Orca Captures</p>
            </a>
            <a
              href='https://www.fisheries.noaa.gov/video/spotlight-southern-resident-killer-whale-interview-noaa-fisheries-biologist-lynne?fbclid=IwAR2bSuEPDR-GPtTM4NcuwunCZ59ppEJO8ok-KtWA3sdf5ZVJiB4OmzfylWM'
              target='_blank'
            >
              <p>NOAA Spotlight on SRKW</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Learn;