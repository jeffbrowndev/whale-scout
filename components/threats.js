import styles from '@/styles/threats.module.scss';

const Threats = () => (
  <div className={styles.threats}>
    <div className={styles.threats_top}>
      <div className={styles.threats_header}>
        <h1>Lack Of Salmon</h1>
        <p>
          Local endangered killer whales (orcas) rely on dwindling salmon
          populations for 90% of their diet
        </p>
      </div>
      <img
        src={`https://login.whalescout.org/wp-content/uploads/2019/03/chasing.svg`}
      />
    </div>
    <div className={styles.threats_middle}>
      <div className={styles.threats_header}>
        <h1>Toxins</h1>
        <p>
          Lubricants, coolants, and flame retardants are linked to disease and
          reproductive issues.
        </p>
      </div>
      <img
        src={`https://login.whalescout.org/wp-content/uploads/2019/03/toxins-1.svg`}
      />
    </div>
    <div className={styles.threats_bottom}>
      <div className={styles.threats_header}>
        <h1>Vessel Effects</h1>
        <p>
          Vessel noise impairs killer whales' ability to echolocate their
          already diminished prey.
        </p>
      </div>
      <img
        src={`https://login.whalescout.org/wp-content/uploads/2019/03/vessels.svg`}
      />
    </div>
  </div>
);

export default Threats;
