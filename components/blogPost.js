import styles from "/styles/blogPost.module.scss";
const moment = require("moment");
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

const BlogPost = props => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <div className={styles.news_card}>
        <div className={styles.news_content_left}>
          <img src={props.image || "./static/images/ws_home_header.svg"} />
        </div>
        <div className={styles.news_content_right}>
          <p>{moment(props.date).format("LL")}</p>
          <h2>{props.title}</h2>
          <Link href={`/article?slug=${props.slug}`}>
            <div className={styles.read_more}>
              <p>READ MORE →</p>
            </div>
          </Link>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default BlogPost;