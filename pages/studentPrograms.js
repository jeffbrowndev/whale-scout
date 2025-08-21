import Layout from '../components/layout';
import styles from '@/styles/studentPrograms.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const studentPrograms = () => (
  <Layout>
    <div className={styles.studentPrograms}>
      <div className={styles.studentPrograms_header_container}>
        <div className={styles.studentPrograms_header}>
          <div className={styles.studentPrograms_header_image}>
              <img
                src="intern_images/intern_group.jpg"
              />
              <div className={styles.square} />
            </div>
          <div className={styles.studentPrograms_header_text}>
            <div className="article_container">
              <div className="article_section">
                <h1>Whale Scout Internship Programs</h1>
                <p>
                  Whale Scout offers unique, hands-on internship opportunities for students at the high school
                  and college level who want to make a real difference for salmon, orcas, and our local
                  ecosystems. Our programs combine environmental science, community engagement, and
                  leadership development — preparing the next generation of conservation leaders.
                  <br/>
                  <br/>
                  Whether you’re a high school student exploring a career in environmental science, or a college
                  student deepening your research skills, Whale Scout provides meaningful experiences that
                  blend fieldwork, education, and collaboration with diverse communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.now_hiring}>
        <h1>Now Hiring Interns: Diverse Voices Student Leadership Program</h1>
        <Link href="https://www.whalescout.org/article?slug=now-hiring-interns-diverse-voices-student-leadership-program"><p>Click here for more information</p></Link>
      </div> */}
      <div className={styles.studentPrograms}>
        <div className={styles.studentPrograms_container}>
          <div className="article_container">
            <div className="article_section">
              <h2>Who We're Looking For</h2>
              <p>
                We seek students from <strong>diverse backgrounds with unique experiences, language skills, and
                interests.</strong> No prior experience is required, but an interest in the outdoors, Washington’s native
                wildlife and plants, and conservation is key. Applicants must:
                <br></br>
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" />Be comfortable spending significant time in the field in a variety of weather conditions
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" />Have an open mind and willingness to explore fields in conservation and environmental science
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" />Be interested in working with diverse communities in both outdoor and indoor settings
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" />Show initiative, adaptability, good judgment, and the ability to work independently and as part of a team
                <br></br>
                <br></br>
              </p>
            </div>
            <div className="article_section">
              <h2>Skills You'll Gain</h2>
              <p>
                While each program offers its own focus, all students benefit from:
                <br></br>
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" /><strong>Hands-on habitat restoration</strong> experience
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" /><strong>Leadership practice</strong> guiding volunteers in educational stewardship activities related to salmon, orcas, and food webs
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" /><strong>Networking opportunities</strong> with professionals in environmental science, nonprofits, and local government
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" /><strong>Insight into nonprofit and government partnerships</strong> and how they serve communities
                <br></br>
                <FontAwesomeIcon icon={faCheck} className="check" /><strong>Water quality monitoring certification</strong> with broad applications in environmental fields
                <br></br>
                <br></br>
              </p>
            </div>
            <div className="article_section">
              <h1>Student Programs</h1>
              <div className={styles.program_section}>
                <Link href="https://www.whalescout.org/article?slug=now-hiring-interns-diverse-voices-student-leadership-program"><h2>Diverse Voices Student Leadership Internship</h2></Link>
                <h3>Seasons: Spring & Summer</h3>
                <p>
                  This program uplifts and amplifies the voices of students from varied backgrounds, encouraging
                  inclusive leadership in conservation. Interns lead volunteer restoration events, engage with the
                  community, and work directly on habitat restoration projects benefiting salmon and orcas. The
                  experience blends outdoor stewardship with public engagement, helping interns grow as both
                  scientists and communicators.
                </p>
              </div>
              <div className={styles.program_section}>
                <h2>UW Bothell Senior Capstone Research Program</h2>
                <h3>Seasons: Fall & Winter</h3>
                <p>
                  In partnership with the University of Washington Bothell, this program allows senior
                  undergraduates to complete their capstone research projects with Whale Scout. Interns work
                  closely with staff on applied research topics such as salmon habitat restoration, environmental
                  monitoring, and community engagement strategies — contributing directly to science-based
                  conservation efforts.
                </p>
              </div>
              <div className={styles.program_section}>
                <Link href="https://www.whalescout.org/article?slug=now-seeking-seeds-to-sky-program-high-school-applicants"><h2>Seeds to Sky High School Career Building Program</h2></Link>
                <h3>Seasons: Fall, Winter, & Spring</h3>
                <p>
                  Our newest initiative connects high school students with career pathways in environmental
                  science and conservation. Through a mix of fieldwork, and career exploration, students gain
                  exposure to a range of green jobs. They develop practical skills, connect with professionals in
                  the field, and take part in meaningful stewardship projects — laying the groundwork for future
                  studies or careers in environmental work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.studentPrograms_more}>
        <div className={styles.studentPrograms_more_image}>
          <img
            src="intern_images/intern.jpg"
          />
          <div className={styles.square} />
        </div>
        <div className="article_container" id={styles.studentPrograms_more_article}>
          <div className="article_section">
              <h2>Program Location</h2>
              <p>
                Whale Scout operates primarily in King County with the internship taking place at multiple sites.
              </p>
            </div>
          <div className="article_section">
            <h2>Contact Information</h2>
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

export default studentPrograms;