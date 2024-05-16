import Layout from '@/components/layout';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import styles from '@/styles/article.module.scss';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const moment = require('moment');

const Article = () => {
  const router = useRouter();
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetch(`https://admin.whalescout.org/wp-json/wp/v2/posts?slug=${router.query.slug}`)
      .then(res => res.json())
      .then(article =>
        setArticle({
          title: article[0].title.rendered,
          date: article[0].date,
          description: article[0].content.rendered.replace(/\n\n\n\n/g, '<br>'),
          image: article[0].acf.featured_image.sizes.large
        })
      );
  }, []);

  return (
    <Layout>
      <div className={styles.article_content}>
        <Link href='/blog'>
          <u>See All Posts</u>
        </Link>
        <h2>{moment(article.date).format('LL')}</h2>
        <h1>{article.title}</h1>
        <div className={styles.article_body}>
          {ReactHtmlParser(article.description)}
        </div>
      </div>
    </Layout>
  )
}

export default Article;