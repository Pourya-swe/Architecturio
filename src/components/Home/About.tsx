import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.aboutContainer}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2>Our Mission</h2>
            <p>
              At Architecturio, we believe that architecture has the power to
              transform communities and improve lives. Our mission is to create
              spaces that inspire, function efficiently, and contribute
              positively to the environment.
            </p>
            <p>
              With every project, we strive to balance innovative design with
              practical considerations, ensuring that our buildings not only
              look exceptional but also serve their purpose effectively and
              sustainably.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>Innovation</h3>
                <p className={styles.featureDescription}>
                  Pushing boundaries with creative solutions
                </p>
              </div>
              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>Sustainability</h3>
                <p className={styles.featureDescription}>
                  Creating eco-friendly designs for the future
                </p>
              </div>
              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>Functionality</h3>
                <p className={styles.featureDescription}>
                  Designing spaces that work efficiently
                </p>
              </div>
              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>Aesthetics</h3>
                <p className={styles.featureDescription}>
                  Crafting beautiful environments
                </p>
              </div>
            </div>
          </div>
          <div className={styles.imageGrid}>
            <img
              src="../../assets/images/about01-1x.png"
              alt="Architectural design"
              className={styles.image}
            />
            <img
              src="/src/assets/images/about02-1x.png"
              alt="Urban architecture"
              className={styles.image}
            />
            <img
              src="/src/assets/images/about03-1x.png"
              alt="Mountain retreat"
              className={styles.image}
            />
            <img
              src="/src/assets/images/about04-1x.png"
              alt="Cultural center"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
