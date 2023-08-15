import React from 'react'
import styles from "./Post.module.css"
import Profile from "../../assets/profile.JPG"
import Like from "../../assets/like.png"
import Comment from "../../assets/comment.png"
import Repost from "../../assets/repost.png"
import Send from "../../assets/send.png"
import Smile from "../../assets/smile.png"
import Gallery from "../../assets/gallery.png"


const Post = () => {
  return (
    <div className={styles.postContainer}>
        <div className={styles.header}>
            <img src={Profile} alt="profile" className={styles.profile} />
            <div className={styles.info}>
                <div className={styles.degree}>
                    <h1>Apurba Ghosh (He/Him) </h1> 
                    <p>. 3rd</p>
                </div>
                
                <p>Leadership Consultant</p>
                <p>4d</p>
            </div>
            <p className={styles.follow}>+ Follow</p>
        </div>
        <div className={styles.post_section}>
            A team is a group of people working towards a common goal. Team building is a process of enabling them to achieve that goal.  Team involves the intelligent scanning of the environment, Awareness of the functioning of the team, Flexibility or readiness to change, Tolerance of ambiguity and difference within the team, a preparedness to accept uncertainty as change occurs.
        </div>
        <div className={styles.reactionInfoContainer}>
            <p>21,096</p>
            <div>
                <p>479 comments</p>
                <p> . 2,433 reposts</p>
            </div>
            
        </div>
        <div className={styles.reactionContainer}>
            <img src={Like} alt="like" className={styles.like} />
            <p>Like</p>
            <img src={Comment} alt="comment" className={styles.comment} />
            <p>Comment</p>
            <img src={Repost} alt="repost" className={styles.repost} />
            <p>Repost</p>
            <img src={Send} alt="send" className={styles.send} />
            <p>Send</p>
        </div>
        <div className={styles.replyContainer}>
            <img src={Profile} alt="Profile Image" className={styles.profile} />
            <input type="text" className={styles.input} placeholder='Add a comment...' />
            <div className={styles.reactions}>
                <img src={Smile} alt="smile" className={styles.smile} />
                <img src={Gallery} alt="gallery" className={styles.gallery} />
            </div> 
        </div>
    </div>
  )
}

export default Post