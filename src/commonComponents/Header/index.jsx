import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../routes/routeNames";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTE_NAMES.HOME} className={styles.navLink}>
        Home Page
      </Link>
      <Link to={ROUTE_NAMES.COUNTER} className={styles.navLink}>
        Counter Page
      </Link>
      <Link to={ROUTE_NAMES.FUNCTIONAL_COUNTER} className={styles.navLink}>
        Functional Counter Page
      </Link>
      <Link to={ROUTE_NAMES.LISTS} className={styles.navLink}>
        Lists
      </Link>
      <Link to={ROUTE_NAMES.COUNTER_LIST} className={styles.navLink}>
        Counter List
      </Link>
    </div>
  );
};

export default Header;
