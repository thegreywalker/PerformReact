import React from "react";
import AccountCirle from "../../assets/account_circle.svg";
import styles from "./Avater.module.css";

const Avater = () => {
    return (
        <div>
            <img src={AccountCirle} alt="Avater" className={styles.avater} />
        </div>
    );
};

export default Avater;
