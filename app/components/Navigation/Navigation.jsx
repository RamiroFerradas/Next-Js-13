import Link from "next/link";
import React from "react";
import styles from "./Navigation.module.css";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Posts",
    route: "/posts",
  },
];
export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                <h2>{label}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
