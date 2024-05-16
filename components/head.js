import Head from 'next/head';

const Header = () => {
  return (
    <Head>
      <title>Whale Scout</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='/static/react-big-calendar.css'
      />
    </Head>
  );
};

export default Header;
