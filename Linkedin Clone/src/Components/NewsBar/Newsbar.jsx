import React from 'react'
import styles from "./Newsbar.module.css"

const NewsBar = (props) => {
  return (
    <div className={props.className}>
        <div className={styles.newsBarContainer}>News Bar</div>
        <div className={styles.newsBarBottomContainer}>News Bar Bottom</div>
    </div>
  )
}

export default NewsBar