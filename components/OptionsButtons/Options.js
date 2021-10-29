import Link from "next/link";
import styles from "./Options.module.css";
const Options = ({ optionIcon }) => {
  return (
    <>
      <div className={styles.options_container}>
        <Link href="#">
          <button className={styles.options_btn}>{optionIcon}</button>
        </Link>
      </div>
    </>
  );
};

export default Options;
