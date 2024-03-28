"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./slagID.module.css";
const FormComponent = ({ topic }) => {
  const router = useRouter();
  const [title, setTitle] = useState(topic.title);
  const [description, setDescription] = useState(topic.description);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description are required .");
      return;
    }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/topic/${topic._id}`,
        {
          method: "PUT",
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Edit Todo</h2>
      <div>
        <label htmlFor="titel">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <button>Confirm</button>
    </form>
  );
};

export default FormComponent;
