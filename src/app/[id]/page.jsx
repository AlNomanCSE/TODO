import React from "react";
import styles from "./slagID.module.css";
export const metadata = {
  title: "Todo | Edite",
  description: "Create Todo for your day",
  keywords: "todo, daily routine, routine",
};
const page = () => {
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <h2>Edit Todo</h2>
        <div>
          <label htmlFor="titel">Title</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" />
        </div>
        <button>Confirm</button>
      </form>
    </main>
  );
};

export default page;
