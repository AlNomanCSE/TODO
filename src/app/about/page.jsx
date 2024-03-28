import React from "react";
import styles from "./about.module.css";
export const metadata = {
  title: "Todo | About",
  description: "Create Todo for your day",
  keywords: "todo, daily routine, routine",
};
const page = () => {
  return (
    <main className={styles.main}>
      <div>
        This "Todo" web app is designed to help you stay organized and manage your
        tasks efficiently. With our user-friendly interface, you can easily add,
        view, edit, and delete tasks based on your needs. Powered by MongoDB on
        the backend, our app ensures reliable data storage and retrieval.
      </div>
    </main>
  );
};

export default page;
