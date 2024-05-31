import React from "react";
import styles from "@/styles/mobileNavigation.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import logo from "@/public/ws_logo.png";
import Image from "next/image";

const MobileNavigation = () =>  {
  return (
    <div>
      <div className={styles.mobile_navigation}>
        <Image className={styles.logo} src={logo} alt="Logo" />
        <div className={styles.hamburger}>
          <label htmlFor="open" className={styles.hamburger_icon}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </label>
          <input type="checkbox" id="open" />
          <ul className={styles.menu}>
            <Link href="/">
              <li>HOME</li>
            </Link>
            <Link href="/watch">
              <li>WATCH</li>
            </Link>
            <li className={styles.dropdown}>
              <input
                type="checkbox"
                id="about_label"
                className={styles.about_label}
              />
              <label htmlFor="about_label">
                GET INVOLVED
                <FontAwesomeIcon
                  icon={faSortDown}
                  className={styles.icon}
                />
              </label>
              <ul className={styles.about_dropdown}>
                <Link href="/internships">
                  <li>INTERNSHIPS</li>
                </Link>
                <Link href="/act">
                  <li>VOLUNTEER</li>
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
              <input
                type="checkbox"
                id="restoration_label"
                className={styles.restoration_label}
              />
              <label htmlFor="restoration_label">
                RESTORATION SITES
                <FontAwesomeIcon
                  icon={faSortDown}
                  className={styles.icon}
                />
              </label>
              <ul className={styles.restoration_dropdown}>
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNavigation;
