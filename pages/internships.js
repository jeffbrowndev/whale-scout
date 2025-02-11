import Layout from '../components/layout';
import styles from '@/styles/internships.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Internships = () => (
  <Layout>
    <div className={styles.internships}>
      <div className={styles.internships_header_container}>
        <div className={styles.internships_header}>
          <div className={styles.internships_header_image}>
              <img
                src="intern_images/intern_group.jpg"
              />
              <div className={styles.square} />
            </div>
          <div className={styles.internships_header_text}>
            <div className="article_container">
              <div className="article_section">
                <h1>Internship Opportunities</h1>
                <p>
                  Dedicated to protecting Pacific Northwest whales through land-based 
                  conservation experiences, Whale Scout takes a boots-on-the-ground approach 
                  to recovering endangered Southern Resident killer whales and the salmon 
                  they rely upon. We acknowledge that we are on the ancestral lands of the 
                  Coast Salish people, and recognize that certain local communities of 
                  color are disproportionately impacted by lack of salmon, poor water quality, 
                  and access to outdoor environmental experiences and education. Our programs, 
                  including this internship, work to address these issues. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.now_hiring}>
        <h1>Now Hiring Interns: Diverse Voices Student Leadership Program</h1>
        <Link href="https://www.whalescout.org/article?slug=now-hiring-interns-diverse-voices-student-leadership-program"><p>Click here for more information</p></Link>
      </div>
      <div className={styles.internships}>
        <div className={styles.internships_container}>
          <div className="article_container">
            <div className="article_section">
              <h3>What are the goals of the program?</h3>
              <p>
                Whale Scout’s goal is to serve as a springboard into future careers in conservation, 
                habitat restoration, and community engagement. The internship program offers diverse 
                students the opportunity to learn about killer whales, salmon habitat, native vegetation, 
                communication, community building, and non-profit organizational management, and become 
                certified water quality monitors. Internship programs are often unpaid, leading to 
                disparities in the field; Whale Scout works to reverse historical trends by paying 
                living wages and actively recruits underrepresented students.
              </p>
            </div>
            <div className="article_section">
              <h3>What do we look for in a candidate?</h3>
              <p>
                We look for students with diverse backgrounds, experiences, language skills, and interests. 
                Although no experience is required, we seek applicants who are interested in the outdoors 
                and nature, have a passion for Washington’s native wildlife and plants, and are at least 
                16 years old. Student interns spend a large amount of time in the field in a variety of weather 
                conditions. Additionally, applicants must have an open mind and a willingness to explore other 
                points of view, and be interested in working with diverse communities in outdoor and indoor settings. 
                We look for proven initiative and the ability to multitask, prioritize, use good judgment, problem 
                solve, and work effectively both independently and as a team in a fast-paced environment. 
              </p>
            </div>
            <div className="article_section">
              <h3>What skills are gained from the program?</h3>
              <p>
                The internship provides a range of foundational skills and experiences in environmental science and beyond. Experiences vary by season but generally include:
                <br></br>
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" />An introduction into environmental restoration with hands-on field experience 
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" />Leadership experiences guiding volunteers in educational stewardship activities relating to salmon, orcas, and food webs 
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" />Networking opportunities with other professionals in the field
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" />First-hand knowledge learning how nonprofits and local governments partner to benefit the community
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" />Certification in water quality monitoring with broad applications in environmental fields
                <br></br>
                <br></br>
                Upon successful completion of the internship, we can provide letters of recommendation for 
                future positions or educational advancement. Internships may also include opportunities 
                to participate in a field trip to San Juan Island or other locations. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.internships_more}>
        <div className={styles.internships_more_image}>
          <img
            src="intern_images/intern.jpg"
          />
          <div className={styles.square} />
        </div>
        <div className="article_container" id={styles.internships_more_article}>
          <div className="article_section">
              <h3>Where is the program located?</h3>
              <p>
                Whale Scout operates primarily in King County with the internship taking place at multiple sites.
              </p>
            </div>
          <div className="article_section">
            <h3>Contact Information</h3>
            <p>
              Whale Scout Director <strong>Whitney Neugebauer</strong> at <a href="mailto:director@whalescout.org">director@whalescout.org</a>
              <br></br>
              Whale Scout Intern Coordinator <strong>Rachael Kutz</strong> at <a href="mailto:rachaelk@whalescout.org">rachaelk@whalescout.org</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Internships;