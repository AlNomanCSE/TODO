import React from "react";
import { MdDelete } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className={styles.card}>
      <div>
        <h4>TITLE</h4>
        <div>
          <p>
            <IoCreate />
          </p>
          <p>
            <MdDelete />
          </p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor et animi
        iusto? Beatae libero iusto nesciunt quidem,
      </p>
    </div>
  );
};

export default Card;
