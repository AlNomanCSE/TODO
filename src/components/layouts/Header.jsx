import React from "react";
import { IoHome } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import styles from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>
          <GoPencil />
          ToDo
        </p>
      </div>
      <nav className={styles.navigation}>
        <p>
          <IoHome className={styles.icon} />
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/add">Add</Link>
          <MdAddBox className={styles.icon} />
        </p>
        <p>
          <Link href="/about">About</Link>
          <FaQuestion className={styles.icon}/>
        </p>
      </nav>
    </header>
  );
};

export default Header;
