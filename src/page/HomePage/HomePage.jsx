import { GiRotaryPhone } from "react-icons/gi";
import css from "./HomePage.module.css";
import { DocTitle } from "../../components/DocTitle";

export default function HomePage() {
  return (
    <>
      <DocTitle>Home</DocTitle>
      <div className="context">
        <div className={css.phone}>
          <GiRotaryPhone size={150} />
        </div>
        <p className={css.text}>
          <span className={css.span}>Phone Book </span>
        </p>
        <p className={css.text}>
          The best application for storing and managing your contacts.
        </p>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
