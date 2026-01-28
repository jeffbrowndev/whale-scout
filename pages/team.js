import Layout from '@/components/layout';
import Member from '@/components/member';
import styles from '@/styles/team.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

// Create team member
class TeamMember {
  constructor(name, role, email, about, image, color) {
    this.name = name;
    this.role = role;
    this.email = email;
    this.about = about;
    this.image = image;
    this.color = color;
  }
}

// Angled square color palette
const green = '#a6d5cd';
const blue = '#032c4a';
const red = '#b91e1e';
const yellow = '#e9df81';

// Add new team members below this line
const Whitney = new TeamMember(
  'Whitney Neugebauer',
  'Director',
  'director@whalescout.org',
  "Whitney Neugebauer completed degrees in Geology and Anthropology from Eckerd College prior to receiving her master’s degree in Marine and Environmental Affairs from the University of Washington. She went on to found Whale Scout in 2013. She lives in Bothell, Washington where she enjoys camping with her family and exploring all that the PNW has to offer.",
  `https://login.whalescout.org/wp-content/uploads/2026/01/Whitney.jpg`,
  green
);

const Juliana = new TeamMember(
  'Juliana Houghton',
  'Board Member',
  'houghtonjuliana@gmail.com',
  (
    <p>
      Juliana is a graduate of the University of Washington’s School of Aquatic
      and Fishery Sciences. She completed her master’s thesis in 2014 on the
      relationship between vessel traffic and the noise levels received by
      killer whales. She and her collaborators aimed to figure out what whales
      actually experience at depth by attaching digital acoustic recording tags
      (Dtags) to them with suction cups. She found that vessel speed was the
      most important contributor to noise levels received by whales (Houghton et
      al. 2015). Juliana hopes her findings will allow more boat-based
      whale-watchers to be as respectful of the whales as possible. For more
      information, check out her{' '}
      <a href='https://www.linkedin.com/in/julianahoughton/' target='_blank'>
        LinkedIn profile
      </a>{' '}
      to see what she's up to now. When Juliana is not working, she is spending
      time with her family. They enjoy boating, beach-combing, hiking,
      and&nbsp;camping.
    </p>
  ),
  `https://login.whalescout.org/wp-content/uploads/2019/03/juliana.jpg`,
  red
);

const Kailey = new TeamMember(
  'Kailey Garson',
  'Board Member, San Juan Island Naturalist Program Co-Coordinator',
  'Kaileyrenee@gmail.com',
  'Kailey holds a B.S. from the University of Washington School of Aquatic and Fishery Science and a M.M.A. from the University of Washington’s School of Marine and Environmental Affairs. Her undergraduate work focused on the effects of the aquarium trade on the Southern Resident killer whale population, whereas her masters work investigated the similarities and differences in the rare cooperative fisheries that have existed and exist throughout the world between humans and five cetacean species. Kailey currently lives in Friday Harbor, WA, with her husband, two kids, two cats, and two dogs. When she is not involved in marine mammal work she can be found in ballet class (she’s danced many forms of dance since a little girl), enjoying the outdoors, and spending time with friends and family.',
  `https://login.whalescout.org/wp-content/uploads/2019/03/kailey.jpg`,
  yellow
);

const Ariel = new TeamMember(
  'Ariel Yseth',
  'San Juan Island Naturalist Program Co-Coordinator',
  'Ariel@whalescout.org',
  'Ariel is originally from eastern South Dakota but has always had the Pacific Northwest in her heart.  She first fell in love with our Southern Resident Killer Whales at the age of two when J1 Ruffles and J2 Granny appeared in the opening sequence of the movie Free Willy. Between her junior and senior year of college, Ariel got her first taste of the PNW when she worked at a summer camp on Orcas Island, WA, in 2012. She moved to Lynnwood, WA, in fall 2013 and began working as a registered nurse on the organ transplant unit at Swedish Hospital in downtown Seattle. She completed the Marine Naturalist Training Program in the fall of 2015 and has since spent hundreds of hours on the shores of the Salish Sea educating the public about our killer whales. In the summertime, Ariel can most often be found wandering the trails of American Camp, San Juan Island. Her favorite activity involves dragging her friends and family on camping trips to the San Juan’s to see the whales. Ariel also loves kayaking (if you meet her be sure to ask about her folding kayak), photography, and considers herself to be a movie buff. You can bet that so long as the activity has something to do with whales or the sea, Ariel loves it. After all, what do you expect from a mermaid?',
  `ariel.jpg`,
  green
);

const Laurie = new TeamMember(
  'Laurie Gogic',
  'Bear Creek Riparian Restoration Lead',
  '',
  'Native of the Pacific Northwest, Laurie grew up in Kirkland, graduated with a MED from the University of Washington and went on to teach ESL (English as a Second Language) for Lake Washington School District. Now retired, after a 37 year teaching career, Laurie focuses her energy on helping the Southern Resident Killer Whales in any way possible. She’s been with Whale Scout since 2014, is a Forest Steward at Idylwood Park, and a water quality monitor for SnoKing Watershed Council. Laurie also volunteers on the Soundwatch Education boat, sponsored by The Whale Museum. Laurie believes that education is KEY to helping the whales and jumps at the chance to talk with kids as well as adults about what they can do to help. She also loves organizing restoration work parties along salmon spawning streams and field trips to the Elwha River.',
  `https://login.whalescout.org/wp-content/uploads/2019/05/laurie.jpg`,
  red
);

const Rachael = new TeamMember(
  'Rachael Kutz',
  'Field Biologist and Education Manager',
  'rachaelk@whalescout.org',
  'Rachael Kutz completed a BS degree in Biology and Animal Sciences in 2020 from George Fox University and went on to study Herpetology and Pre-Veterinary Medicine at OSU and UIUC. She started working at Whale Scout as an intern in 2023 and worked her way up to Field Biologist and Education Manager now supervising and leading various WS restoration projects. After graduating, Rachael realized her true passion was to care for wildlife any way she could through means of conservation and habitat restoration. Ever since a child, she would visit Seattle in hopes of one day living here. Now that she\'s accomplished that dream, she wants to do everything in her power to protect the wildlife here, both on land and in the sea. When not out with Whale Scout, she’s volunteering at the Seattle Aquarium, painting, snowboarding, or caring for nearly 60 house plants!',
  `https://login.whalescout.org/wp-content/uploads/2026/01/Rachael.jpg`,
  blue
);

const Valerye = new TeamMember(
  'Valerye Perez',
  'Board Member',
  '',
  'Valerye completed her degree at Western Washington University in Environmental Science with an emphasis on freshwater and terrestrial ecology in 2024. Valerye started with Whale Scout as an intern, then as an Intern Coordinator, and now serves as a board member sharing her insights on early career development in the field of environmental conservation. She is a native Spanish-speaker, loves to knit, crochet and read.',
  `valerye.jpg`,
  blue
);

const Liz = new TeamMember(
  'Liz Macias',
  'Field Technician ',
  '',
  'Liz has always had a passion for caring for wildlife and the environment from a young age. She is driven by the desire to leave the Earth better than she found it, hoping to inspire others along the way. She received a degree in Conservation and Restoration science in 2025 from the University of Washington Bothell and published her research paper “Benthic Foraminifera Found to Have Survived Better During the Paleocene- Eocene Thermal Maximum with Implications to a Future Mass Extinction Event” in The Crow. She loves field-based research; however, when she\'s not in the field, she enjoys puzzling, reading, long bike rides, and enjoying new experiences.',
  `https://login.whalescout.org/wp-content/uploads/2026/01/Liz.jpg`,
  yellow
);

const Madi = new TeamMember(
  'Madi Stark',
  'Field Technician ',
  '',
  'Madalynn Stark (or Madi), completed a degree in Environmental Justice, with minors in History and Global Engagement, at Seattle Pacific University in 2025. Madi began at Whale Scout as a summer intern and then took on the role of Field Technician in the fall of 2025. She is deeply passionate about the environment and hopes to inspire others to continue Whale Scout\'s mission of protecting and restoring salmon habitat. Having an affinity with whales and all marine life since she was little, she feels excited and motivated to be outside and make a difference. Madi lives in Seattle, and while not out in the field, she is hiking, reading, skiing, playing soccer, adding as many houseplants as possible to her home, writing piano music, and finding the best coffee shops and thrift stores in the city.',
  `https://login.whalescout.org/wp-content/uploads/2026/01/Madi.jpg`,
  green
);

// All team members
const team = [
  Whitney,
  Juliana,
  Valerye,
  Kailey,
  Ariel,
  Laurie,
  Rachael,
  Liz,
  Madi,
];

export default () => (
  <Layout credits={'Footer photo: Jill Clogston | '}>
    <div className={styles.team_header}>
      <ScrollAnimation animateIn='fadeIn'>
        <h1>WHO WE ARE</h1>
      </ScrollAnimation>
    </div>
    <div className={styles.team}>
      {team.map(member => (
        <Member
          key={member.name}
          image={member.image}
          color={member.color}
          name={member.name}
          role={member.role}
          email={member.email}
          about={member.about}
        />
      ))}
    </div>
    <div className={styles.overview}>
      <h3>Fostering Inclusive Environmental Action</h3>
      <p>
        Whale Scout's intention is to be an inclusive, diverse, 
        and collaborative organization that contributes to equitable 
        opportunities for all to have a voice and take meaningful 
        action on behalf of the environment. We strive to serve and 
        reflect our region's diversity while honoring and being 
        informed by the knowledge and traditions of its first stewards, 
        the Coast Salish people.
      </p>
    </div>
    <div className={styles.team_footer}>
      <h1>Meet Our Partners</h1>
      <div className={styles.line} />
      <div className={styles.supporters}>
        <ul>
          <li><Link className={styles.supporter_link} href={"https://www.whaleresearch.com/"} target='_blank'>Center for Whale Research</Link></li>
          <li><Link className={styles.supporter_link} href={"https://www.bothellwa.gov/"} target='_blank'>City of Bothell</Link></li>
          <li><Link className={styles.supporter_link} href={"https://defenders.org/"} target='_blank'>Defenders of Wildlife NW</Link></li>
          <li><Link className={styles.supporter_link} href={"https://www.earthcorps.org/"} target='_blank'>EarthCorps</Link></li>
          <li><Link className={styles.supporter_link} href={"https://folkssji.org/"} target='_blank'>F.O.L.K.S. (Friends of Lime Kiln Society)</Link></li>
          <li><Link className={styles.supporter_link} href={"https://forterra.org/"} target='_blank'>Forterra</Link></li>
          <li><Link className={styles.supporter_link} href={"https://www.friendsnorthcreekforest.org/"} target='_blank'>Friends of North Creek Forest</Link></li>
          <li><Link className={styles.supporter_link} href={"https://ketalegacy.org/"} target='_blank'>Keta Legacy Foundation</Link></li>
        </ul>
        <ul>
          <li><Link className={styles.supporter_link} href={"https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks"} target='_blank'>King County Parks</Link></li>
          <li><Link className={styles.supporter_link} href={"https://kingcounty.gov/en/dept/dnrp/waste-services/wastewater-treatment/about"} target='_blank'>King County Wastewater Treatment Division</Link></li>
          <li><Link className={styles.supporter_link} href={"https://www.midsoundfisheries.org/"} target='_blank'>MidSound Fisheries Enhancement Group</Link></li>
          <li><Link className={styles.supporter_link} href={"https://www.nature.org/en-us/about-us/where-we-work/united-states/washington/"} target='_blank'>The Nature Conservancy</Link></li>
          <li><Link className={styles.supporter_link} href={"https://onebothell.org/"} target='_blank'>OneBothell</Link></li>
          <li><Link className={styles.supporter_link} href={"https://orcabehaviorinstitute.org/"} target='_blank'>Orca Behavior Institute</Link></li>
          <li><Link className={styles.supporter_link} href={"https://www.orcaconservancy.org/?gad_source=1&gclid=CjwKCAjwufq2BhAmEiwAnZqw8jYcefe7kEMwQkwHft76_f64O-YHiuPSiLTBT_AhTTr_PKakjOU3fhoCBpAQAvD_BwE"} target='_blank'>Orca Conservancy</Link></li>
          <li><Link className={styles.supporter_link} href={"https://www.orcanetwork.org/"} target='_blank'>Orca Network</Link></li>
        </ul>
        <ul>
          <li><Link className={styles.supporter_link} href={"https://www.orcamonth.com/osa"} target='_blank'>Orca Salmon Alliance</Link></li>
          <li><Link className={styles.supporter_link} href={"http://www.orcawatcher.com/"} target='_blank'>Orca Watcher Photography</Link></li>
          <li><Link className={styles.supporter_link} href={"https://rosefdn.org/"} target='_blank'>The Rose Foundation</Link></li>
          <li>Stowe Family</li>
          <li><Link className={styles.supporter_link} href={"https://whalemuseum.org/pages/salish-sea-association-of-marine-naturalists"} target='_blank'>Salish SEA</Link></li>
          <li><Link className={styles.supporter_link} href={"https://sjclandbank.org/"} target='_blank'>San Juan County Land Bank</Link></li>
          <li><Link className={styles.supporter_link} href={"https://www.seattleaquarium.org/"} target='_blank'>Seattle Aquarium</Link></li>
          <li><Link className={styles.supporter_link} href={"https://www.skagitfisheries.org/"} target='_blank'>Skagit Fisheries Enhancement Group</Link></li>
        </ul>
        <ul>
          <li><Link className={styles.supporter_link} href={"https://www.tulaliptribes-nsn.gov/"} target='_blank'>Tulalip Tribes</Link></li>
          <li><Link className={styles.supporter_link} href={"https://wdfw.wa.gov/"} target='_blank'>WA Department of Fish and Wildlife</Link></li>
          <li><Link className={styles.supporter_link} href={"https://www.dnr.wa.gov/"} target='_blank'>WA Department of Natural Resources</Link></li>
          <li><Link className={styles.supporter_link} href={"https://www.govlink.org/watersheds/8/default.aspx"} target='_blank'>WRIA 8</Link></li>
          <li><Link className={styles.supporter_link} href={"https://whalemuseum.org/"} target='_blank'>The Whale Museum</Link></li>
        </ul>
      </div>
    </div>
  </Layout>
);