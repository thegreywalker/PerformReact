import React from 'react'
import styles from "./AllPosts.module.css"
import Post from './Post'

const AllPosts = () => {
  return (
    <div className={styles.allPostsContainer}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default AllPosts