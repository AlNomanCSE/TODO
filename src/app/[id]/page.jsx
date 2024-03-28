import mongoose from "mongoose";
import React from "react";
import styles from "./slagID.module.css";
import { getTopic } from "@/utils/process";
import FormComponent from "./FormComponent";

const page = async ({ params }) => {
  const { id } = params;
  const topicId = new mongoose.Types.ObjectId(id);
  const topic = await getTopic(topicId);
  console.log(topic);
  return (
    <main className={styles.main}>
      <FormComponent topic={topic} />
    </main>
  );
};

export default page;
