import React from 'react'
import styles from "./Header.module.css"
import img from "../../assets/linkedin.webp";
import search from "../../assets/search.svg"
import home from "../../assets/home.svg"
import network from "../../assets/network.svg"
import work from "../../assets/work.svg"
import messaging from "../../assets/message.svg"
import notification from "../../assets/notifications.svg"
import Profile from "../../assets/profile.JPG"
import PostJob from "../../assets/post_job.svg"
import ForBuiseness from "../../assets/for_buiseness.svg"



const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.left_pane}>
            <img src={img} alt="logo" className={styles.logo} />
            <img src={search} alt="logo" className={styles.search} />
            <img src={home} alt="logo" className={styles.home} />
            <img src={network} alt="logo" className={styles.network} />
            <img src={work} alt="logo" className={styles.work} />
            <img src={messaging} alt="logo" className={styles.message} />
            <img src={notification} alt="logo" className={styles.notification} />
            <img src={Profile} alt="logo" className={styles.avater} />
        </div>
        <div className={styles.right_pane}>
            <img src={ForBuiseness} alt="logo" className={styles.for_buiseness} />
            <img src={PostJob} alt="logo" className={styles.post_jobs} />
        </div>
    </div>
  )
}

export default Header