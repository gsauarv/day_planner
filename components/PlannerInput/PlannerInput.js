import Options from "../OptionsButtons/Options";
import styles from "./PlannerInput.module.css";
import { HiCalendar } from "react-icons/hi";
const PlannerInput = () => {
  return (
    <div>
      <form>
        <input
          aria-label="Enter your plan"
          placeholder="Name of your plan"
          type="text"
          className={styles.form_input}
        ></input>

        <textarea
          aria-label="Describe your plan."
          placeholder="Describe your plan"
          type="text"
          className={styles.form_textarea}
        ></textarea>
        <Options optionIcon={<HiCalendar />} />
      </form>
    </div>
  );
};

export default PlannerInput;
