import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  const handleActiveLink = ({ isActive }) => {
    return isActive ? { color: "yellow" } : null;
  };
  return (
    <header className={styles.header}>
      <h3>logo</h3>
      <nav className={styles.navBar}>
        <NavLink style={handleActiveLink} to="/">
          Home
        </NavLink>
        <NavLink style={handleActiveLink} to="/dogs">
          Dogs
        </NavLink>
        <NavLink style={handleActiveLink} to="/cats">
          Cats
        </NavLink>
      </nav>
    </header>
  );
}
