import React from 'react'
import styles from "./Sidebar.module.css"
import backgroundImage from "../../assets/background.png"
import Profile from "../../assets/profile.JPG"
import Bookmarks from "../../assets/bookmarks.svg"

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
        <div className={styles.sidebarTop}>
            <img src={backgroundImage} alt="Background Image" className={styles.backgroundImage} />
            <img src={Profile} alt="Profile Image" className={styles.profile} />
            <div className={styles.header}>
                <h1>Apurba Ghosh</h1>
                <p>Revolutionary & Enterpreneur | Leading a Future.</p>
            </div>
            <div className={styles.analytics}>
                <h1>Analytics & tools</h1>
                <p>35 post impressions</p>
            </div>
            <div className={styles.offers}>
                <p>Access exclusive tools and insights</p>
                <h1>Network Smarter, Try Premium free</h1>
            </div>
            <div className={styles.items}>
                <img src={Bookmarks} alt="bookmarks" />
                <p>My items</p>
            </div>
        </div>
        <div className={styles.sidebarBottom}>
            <p className={styles.recent}>Recent</p>
            <div className={styles.recent_content}>
                <p>Balancing Full Time Employee</p>
                <p>Personal Development</p>
                <p>Growthschool LI WS Batch 52</p>
                <p># startups</p>
            </div>
            <p className={styles.groups}>
                Groups
            </p>
            <div className={styles.groups_content}>
            <p>Personal Development</p>
            <p>Growthschool LI WS Batch 52</p>
            <p>Growthschool LI WS Batch 51</p>
            <p>See all</p>
            </div>
            <div className={styles.events}>
                <p>Events</p>
                <p>+</p>
            </div>
            <p className={styles.followed_hashtags}>Followed Hashtags</p>
            <p className={styles.fh_content}># startups</p>
            <p className={styles.fh_content}>See all</p>
            <hr />
            <h1 className={styles.discover}>Discover more</h1>
        </div>
    </div>
  )
}

export default Sidebar