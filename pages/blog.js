import Layout from '@/components/layout';
import NewsCard from '@/components/blogPost';
import styles from '@/styles/blog.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';

export const getStaticProps = async () => {
  const posts = await fetch(
    `https://login.whalescout.org/wp-json/wp/v2/posts?categories=3`
  ).then(posts => posts.json());

  return { props: { posts } };
}; 

const Blog = props => {
  return (
    <Layout color='white'>
      <div className={styles.news_header}>
        <ScrollAnimation animateIn='fadeIn'>
          <h1>BLOG</h1>
        </ScrollAnimation>
      </div>
      <div className={styles.news_wrapper}>
        <div className={styles.news}>
          {props.posts.map(post => (
            <NewsCard
              key={post.id}
              date={post.date}
              title={post.title.rendered}
              content={post.content.rendered}
              image={post.acf.featured_image.url}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;