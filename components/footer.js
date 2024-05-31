import styles from "@/styles/footer.module.scss";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <div className={styles.footer} style={{ background: props.color }}>
      <img src="ws_footer_background.png" alt="Rock" />
      <div className={styles.footer_background}>
        <div className={styles.footer_container}>
          <div className={styles.site_map}>
            <div className={styles.site_map_column}>
              <ul>
                <Link href="/">
                  <li className={styles.bold}>HOME</li>
                </Link>
                <Link href="/watch">
                  <li className={styles.bold}>WATCH</li>
                </Link>
                <Link href="/internships">
                  <li className={styles.bold}>INTERNSHIPS</li>
                </Link>
                <Link href="/act">
                  <li className={styles.bold}>RESTORE HABITAT</li>
                </Link>
                <Link href="/act#months">
                  <li className={styles.bold}>#ORCAHERO</li>
                </Link>
                <a
                  href="https://www.podmatch.org/"
                  target="_blank"
                >
                  <li className={styles.bold}>PODMATCH</li>
                </a>
              </ul>
            </div>
            <div className={styles.site_map_column}>
              <ul>
                <Link href="/donate">
                  <li className={styles.bold}>DONATE</li>
                </Link>
                <Link href="/blog">
                  <li className={styles.bold}>BLOG</li>
                </Link>
                <Link href="/learn">
                  <li className={styles.bold}>LEARN</li>
                </Link>
                <Link href="/team">
                  <li className={styles.bold}>WHO WE ARE</li>
                </Link>
                <Link href="/contact">
                  <li className={styles.bold}>CONTACT</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={styles.footer_connect}>
            <div className={styles.news_letter}>
              <h3>Join Our Newsletter</h3>
              <div id="mc_embed_signup">
                <form
                  action="https://whalescout.us12.list-manage.com/subscribe/post?u=0ab3aff647e8e72d79cf68062&amp;id=504cc907de"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                >
                  <div
                    id="mc_embed_signup_scroll"
                    className={styles.signup_form}
                  >
                    <input
                      type="email"
                      name="EMAIL"
                      className="email"
                      id="mce-EMAIL"
                      placeholder="email address"
                      required
                    />
                    <div>
                      <input
                        type="submit"
                        value="SIGN UP"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className={styles.submit_button}
                      />
                    </div>
                    <span />
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.connect}>
              <div className={styles.address}>
                <h3>Contact</h3>
                <p>
                  P.O. Box 426
                  <br />
                  Woodinville, WA 98072
                  <br />
                  425-770-0787
                  <br />
                  info@whalescout.org
                </p>
              </div>
              <div className={styles.social}>
                <h3>Follow</h3>
                <Link
                  href="https://www.instagram.com/whalescout/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    size="2x"
                    icon={faInstagram}
                    className={styles.social_icon}
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/whalescout/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    size="2x"
                    icon={faFacebook}
                    className={styles.social_icon}
                  />
                </Link>
                <Link href="https://twitter.com/whalescout" target="_blank">
                  <FontAwesomeIcon
                    size="2x"
                    icon={faXTwitter}
                    className={styles.social_icon}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.credits}>
          © Copyright 2024 Whale Scout&nbsp;| All Rights Reserved&nbsp;|{" "}
          {props.credits}
          Website&nbsp;by&nbsp;
          <span>
            <a href="http://www.jeffbrown.io" target="_blank">
              <u>Jeff&nbsp;Brown</u>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;