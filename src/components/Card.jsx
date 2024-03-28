"use client";
import React from "react";
import { MdDelete } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./Card.module.css";
import Link from "next/link";
const Card = ({ topic }) => {
  const router = useRouter();
  async function handleDelete() {
    await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/topic?id=${topic._id}`, {
      method: "DELETE",
    });
    router.refresh();
  }
  return (
    <div className={styles.card}>
      <div>
        <h4>{topic.title}</h4>
        <div>
          <p>
            <Link href={`${topic._id}`}>
              <IoCreate />
            </Link>
          </p>
          <p>
            <MdDelete onClick={handleDelete} style={{ cursor: "pointer" }} />
          </p>
        </div>
      </div>
      <p>{topic.description}</p>
    </div>
  );
};

export default Card;
