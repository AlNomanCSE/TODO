"use client";
import React, { useState } from "react";
import styles from "./add.module.css";
import { useRouter } from "next/navigation";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description are required .");
      return;
    }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/topic/add`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        }
      );
      if (res.ok) router.push("/");
      else throw new Error("Failed to add new topic");
    } catch (error) {
      console.log("Error adding todo ...", error);
    }
  }
  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Create a New ToDo</h2>
        <div>
          <label htmlFor="titel">Title</label>
          <input
            id="titel"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your title here ..."
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            name="description"
            value={description}
            placeholder="Enter your description ..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Save Todo</button>
      </form>
    </main>
  );
};

export default page;
