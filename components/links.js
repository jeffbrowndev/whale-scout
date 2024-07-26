import styles from "@/styles/links.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Links = () => {
  return (
    <ul className={styles.links}>
      <Link href="/">
        <li>HOME</li>
      </Link>
      <li className={styles.dropdown}>
        GET INVOLVED
        <FontAwesomeIcon icon={faSortDown} className={styles.icon} />
        <ul>
        <Link href="/internships">
            <li>INTERNSHIPS</li>
          </Link>
          <Link href="/act">
            <li>VOLUNTEER</li>
          </Link>
          <Link href="/watch">
            <li>WATCH</li>
          </Link>
          <Link href="/orcaHero">
            <li>BE AN #ORCAHERO</li>
          </Link>
          <Link href="https://www.podmatch.org/" target="_blank">
            <li>PODMATCH</li>
          </Link>
          <Link href="/donate">
            <li>DONATE</li>
          </Link>
        </ul>
      </li>
      <li className={styles.dropdown}>
        RESTORATION SITES
        <FontAwesomeIcon icon={faSortDown} className={styles.icon} />
        <ul>
          <Link href="/bearCreek">
            <li>BEAR CREEK</li>
          </Link>
          <Link href="/formerWayneGolfCourse">
            <li>FORMER WAYNE GOLF COURSE</li>
          </Link>
        </ul>
      </li>
      <Link href="/blog">
        <li>BLOG</li>
      </Link>
      <Link href="/learn">
        <li>LEARN</li>
      </Link>
      <Link href="/team">
        <li>WHO WE ARE</li>
      </Link>
      <Link href="/contact">
        <li>CONTACT</li>
      </Link>
      <Link target="_blank" href="https://shop.whalescout.org">
        <li className={styles.link_button_bold}>SHOP</li>
      </Link>
    </ul>
  );
};

export default Links;