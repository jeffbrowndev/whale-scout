import Layout from '@/components/layout';
import styles from '@/styles/donate.module.scss';
import Image from 'next/image';
import Link from 'next/link';

//temp

const Donate = () => (
  <Layout>
    <div className={styles.donate}>
      <div className="article_container">
        <div className="article_section">
          <h1>Donate Today!</h1>
          <div className="line" />
          <p>
            Support Whale Scout in protecting endangered orcas and their habitat! Your donation funds vital salmon 
            habitat restoration, public education, and conservation efforts. Together, we can ensure a thriving 
            ecosystem for whales and a healthier environment. Every contribution makes a difference. Thank you 
            for your support!
          </p>
        </div>
      </div>
      <div className={styles.donate_options}>
        <div className={styles.payment_services}>
          <h2>PayPal</h2>
          <p>All major credit cards (no account required)</p>
          <div className={styles.icon_row}>
            <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7P57R2WS8MM8Q&source=url" target='_blank'>
              <Image src="/donation_icons/paypal.png" height={75} width={75}></Image>
            </Link>
          </div>
        </div>
        <div className={styles.payment_services}>
          <h2>Venmo</h2>
          <p>(Venmo account required)</p>
          <div className={styles.icon_row}>
            <Link href="https://venmo.com/u/WhaleScout" target='_blank'>
              <Image src="/donation_icons/venmo.png" height={75} width={75}></Image>
            </Link>
          </div>
        </div>
        <div className={styles.address}>
          <h2>Paper checks</h2>
          <p>
            18414 104th Ave NE #330
            <br/>
            Bothell, WA
            <br/>
            98011
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default Donate;