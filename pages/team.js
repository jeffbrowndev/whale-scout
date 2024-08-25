import Layout from '@/components/layout';
import Member from '@/components/member';
import styles from '@/styles/team.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';

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
  `https://admin.whalescout.org/wp-content/uploads/2019/03/whitney.jpg`,
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
  `https://admin.whalescout.org/wp-content/uploads/2019/03/juliana.jpg`,
  red
);

const Bryan = new TeamMember(
  'Bryan Alvarez',
  'Board Member',
  'Bryan@wrestlingobserver.com',
  (
    <p>
      Bryan Alvarez has been the editor and publisher of Figure Four Weekly 
      since 1995. Besides the newsletter, which covers pro-wrestling and mixed 
      martial arts, he has also written wrestling columns for Penthouse Magazine 
      (Mat Max!) in 1999 and 2000; The Fight Network in Canada and Fighting Spirit 
      Magazine in the UK; co-authored Death of WCW with RD Reynolds in 2004; 
      wrestled professionally throughout the US and Canada since 1993; and trains 
      extensively in Gracie Jiu-Jitsu where he holds a black belt under Master Pedro Sauer. 
      He currently works as host of Wrestling Observer Live on the Sports Byline Radio 
      Network and hosts Figure Four Daily, Wrestling Observer Radio, and the Bryan & Vinny Show at
      &nbsp;<a href="https://www.wrestlingobserver.com" target="_blank">www.wrestlingobserver.com</a>.
      Bryan has previously helped produce episodes of the Whale Scout Podcast and serves as an editor.
    </p>
  ),
  `https://admin.whalescout.org/wp-content/uploads/2019/03/bryan.jpg`,
  blue
);

const Kailey = new TeamMember(
  'Kailey Garson',
  'Board Member, San Juan Island Naturalist Program Co-Coordinator',
  'Kaileyrenee@gmail.com',
  'Kailey holds a B.S. from the University of Washington School of Aquatic and Fishery Science and a M.M.A. from the University of Washington’s School of Marine and Environmental Affairs. Her undergraduate work focused on the effects of the aquarium trade on the Southern Resident killer whale population, whereas her masters work investigated the similarities and differences in the rare cooperative fisheries that have existed and exist throughout the world between humans and five cetacean species. Kailey currently lives in Friday Harbor, WA, with her husband, two kids, two cats, and two dogs. When she is not involved in marine mammal work she can be found in ballet class (she’s danced many forms of dance since a little girl), enjoying the outdoors, and spending time with friends and family.',
  `https://admin.whalescout.org/wp-content/uploads/2019/03/kailey.jpg`,
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
  `https://admin.whalescout.org/wp-content/uploads/2019/05/laurie.jpg`,
  red
);

const Rachael = new TeamMember(
  'Rachael Kutz',
  'Student and Community Education Coordinator',
  'rachaelk@whalescout.org',
  "She realized her true passion was to care for wildlife any way she could through means of conservation and habitat restoration. Ever since a child, she would visit Seattle in hopes of one day living here. Now that she's accomplished that dream, she wants to do everything in her power to protect the wildlife here, both on land and in the sea. When not out with Whale Scout, she’s volunteering at the Seattle Aquarium, baking, painting, snowboarding, or caring for nearly 60 house plants!",
  `rachael.jpg`,
  blue
);

const Valerye = new TeamMember(
  'Valerye Perez',
  'Internship Coordinator',
  '',
  'Valerye is completing her degree at Western Washington University in Environmental Science with an emphasis on freshwater and terrestrial ecology. She started with Whale Scout as an intern and is now an Intern Coordinator. She is a native Spanish-speaker, loves to knit, crochet and read.',
  `valerye.jpg`,
  yellow
);

// All team members
const team = [
  Whitney,
  Juliana,
  Bryan,
  Kailey,
  Ariel,
  Laurie,
  Rachael,
  Valerye
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
          <li>Center for Whale Research</li>
          <li>City of Bothell</li>
          <li>Defenders of Wildlife NW</li>
          <li>EarthCorps</li>
          <li>F.O.L.K.S. (Friends of Lime Kiln Society)</li>
          <li>Forterra</li>
          <li>Friends of North Creek Forest</li>
          <li>Keta Legacy Foundation</li>
        </ul>
        <ul>
          <li>King County Parks</li>
          <li>King County Wastewater Treatment Division</li>
          <li>MidSound Fisheries Enhancement Group</li>
          <li>The Nature Conservancy</li>
          <li>OneBothell</li>
          <li>Orca Behavior Institute</li>
          <li>Orca Conservancy</li>
          <li>Orca Network</li>
        </ul>
        <ul>
          <li>Orca Salmon Alliance</li>
          <li>Orca Watcher Photography</li>
          <li>The Rose Foundation</li>
          <li>Stowe Family</li>
          <li>Salish SEA</li>
          <li>San Juan County Land Bank</li>
          <li>Seattle Aquarium</li>
          <li>Skagit Fisheries Enhancement Group</li>
        </ul>
        <ul>
          <li>Tulalip Tribes</li>
          <li>WA Department of Fish and Wildlife</li>
          <li>WA Department of Natural Resources</li>
          <li>WRIA 8</li>
          <li>The Whale Museum</li>
        </ul>
      </div>
    </div>
  </Layout>
);