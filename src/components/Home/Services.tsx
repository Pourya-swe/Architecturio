import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Services.module.scss";
import { services } from "../../data/services";
import { ClassList } from "../../Utils/Class-List/ClassList";

const Services = () => {
  const allServices = services;

  return (
    <section className={styles.section}>
      <div className={styles.servicesContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.description}>
            We offer a comprehensive range of architectural services to meet
            your project needs, from initial concept to final construction.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {allServices.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <FontAwesomeIcon
                className={ClassList(styles.icon)}
                icon={service.icon}
              />
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
