import Layout from '@/components/layout';
import React from 'react';
import styles from '@/styles/article.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const moment = require('moment');

const Article = () => {
  const router = useRouter();
  const [article, setArticle] = useState({description: {__html:""}});

  useEffect(() => {
    if (!router.isReady) return;

    fetch(`https://login.whalescout.org/wp-json/wp/v2/posts?slug=${router.query.slug}`)
      .then(res => res.json())
      .then(article =>
        setArticle({
          title: article[0].title.rendered,
          date: article[0].date,
          description: {__html:article[0].content.rendered.replace(/\n\n\n\n/g, '<br>')},
          image: article[0].acf.featured_image.sizes.large
        })
      );
  }, [router.isReady]);

  return (
    <Layout>
      <div className={styles.article_content}>
        <Link href='/blog'>
          <u>See All Posts</u>
        </Link>
        <h2>{moment(article.date).format('LL')}</h2>
        <h1>{article.title}</h1>
        <div className={styles.article_body} dangerouslySetInnerHTML={article.description} />
      </div>
    </Layout>
  )
}

export default Article;