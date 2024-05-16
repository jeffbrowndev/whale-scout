import Layout from "@/components/layout";
import styles from '@/styles/orcaHero.module.scss';
import Month from "@/components/month";
import ScrollAnimation from 'react-animate-on-scroll';

const OrcaHero = () => {
  return (
    <Layout>
      <div className={styles.volunteer}>
        <div className={styles.volunteer_header}>
          <ScrollAnimation animateIn='fadeIn'>
            <div className={styles.volunteer_header_text}>
              <h1>BE AN #ORCAHERO</h1>
            </div>
          </ScrollAnimation>
        </div>
        <div className={styles.monthly_checklist}>
          <div className={styles.monthly_checklist_header}>
            <h1>Do Things Everyday</h1>
            <p>
              A year of keeping killer whales, their food, and their habitats
              protected. You can make a difference by following this monthly
              checklist. Share your efforts with others on social media using the
              tag #OrcaHero.
            </p>
          </div>
          <div className={styles.months}>
            <Month
              src={`/act_icons/policies.svg`}
              title='January'
              description='Support natural area protection policies'
            />
            <Month
              src={`/act_icons/recycle.svg`}
              title='February'
              description='Reduce, reuse, recycle'
            />
            <Month
              src={`/act_icons/toxins.svg`}
              title='March'
              description='Switch to non-toxic cleaner and yard care'
            />
            <Month
              src={`/act_icons/car.svg`}
              title='April'
              description='Drive less to reduce footprint'
            />
            <Month
              src={`/act_icons/groceries.svg`}
              title='May'
              description='Shop local, organic grocers'
            />
            <Month
              src={`/act_icons/water.svg`}
              title='June'
              description='Conserve water'
            />
            <Month
              src={`/act_icons/boat.svg`}
              title='July'
              description='Keep habitats quiet by operating vessels slowly.'
            />
            <Month
              src={`/act_icons/fish.svg`}
              title='August'
              description='Choose wild, sustainable seafood'
            />
            <Month
              src={`/act_icons/waves.svg`}
              title='September'
              description='Support efforts for free-flowing rivers'
            />
            <Month
              title='October'
              src={`/act_icons/hand.svg`}
              description='Volunteer for habitat restoration events'
            />
            <Month
              src={`/act_icons/bulb.svg`}
              title='November'
              description='Conserve electricity'
            />
            <Month
              src={`/act_icons/donate.svg`}
              title='December'
              description='Donate'
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OrcaHero;