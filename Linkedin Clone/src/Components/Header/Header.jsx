import React from "react";
import styles from "./Header.module.css";
import img from "../../assets/linkedin.webp";
import search from "../../assets/search.svg";
import home from "../../assets/home.svg";
import network from "../../assets/network.svg";
import work from "../../assets/work.svg";
import messaging from "../../assets/message.svg";
import notification from "../../assets/notifications.svg";
import Profile from "../../assets/profile.JPG";
import PostJob from "../../assets/post_job.svg";
import ForBuiseness from "../../assets/for_buiseness.svg";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.masterContainer}>
                <div className={styles.left_pane}>
                    <img src={img} alt="logo" className={styles.logo} />
                    <div className={styles.searchContainer}>
                        <img
                            src={search}
                            alt="logo"
                            className={styles.search}
                        />
                        <p>Search</p>
                        <input
                            type="text"
                            className={styles.searchInput}
                            placeholder="Search"
                        />
                    </div>

                    <div className={styles.homeDiv}>
                        <img src={home} alt="logo" className={styles.home} />
                        <p>Home</p>
                    </div>

                    <div className={styles.networkDiv}>
                        <img
                            src={network}
                            alt="logo"
                            className={styles.network}
                        />
                        <p>My Network</p>
                    </div>

                    <div className={styles.jobsDiv}>
                        <img src={work} alt="logo" className={styles.work} />
                        <p>Jobs</p>
                    </div>

                    <div>
                        <img
                            src={messaging}
                            alt="logo"
                            className={styles.message}
                        />
                        <p>Messaging</p>
                    </div>

                    <div>
                        <img
                            src={notification}
                            alt="logo"
                            className={styles.notification}
                        />
                        <p>Notifications</p>
                    </div>

                    <div className={styles.avaterDiv}>
                        <img
                            src={Profile}
                            alt="logo"
                            className={styles.avater}
                        />
                        <p>Me</p>
                    </div>
                </div>
                <div className={styles.right_pane}>
                    <div>
                        <img
                            src={ForBuiseness}
                            alt="logo"
                            className={styles.for_buiseness}
                        />
                        <p>For Buiseness</p>
                    </div>

                    <div>
                        <img
                            src={PostJob}
                            alt="logo"
                            className={styles.post_jobs}
                        />
                        <p>Post a Job for free</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
