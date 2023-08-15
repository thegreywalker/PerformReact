import React from 'react'
import styles from "./Feed.module.css"
import Profile from "../../assets/profile.JPG"
import Photo from "../../assets/photo.png"
import Video from "../../assets/video.png"
import Calender from "../../assets/calender.png"
import Article from "../../assets/article.png"

const Feed = () => {
  return (
    <div className={styles.feedContainer}>
        <div className={styles.feedContainer_topBar}>
            <img src={Profile} alt="Profile Image" className={styles.profile} />
            <input type="text" className={styles.input} placeholder='Start a post' />
        </div>
        <div className={styles.feedContainer_bottomBar}>
            <img src={Photo} alt="Photo" className={styles.photo} />
            <p>Photo</p>
            <img src={Video} alt="Video" className={styles.video} />
            <p>Video</p>
            <img src={Calender} alt="Calender" className={styles.calender} />
            <p>Event</p>
            <img src={Article} alt="Article" className={styles.article} />
            <p>Write article</p>
        </div>
    </div>
  )
}

export default Feed