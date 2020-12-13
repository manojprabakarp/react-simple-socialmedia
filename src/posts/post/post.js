import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    like,
    togglePopUp
} from './postsSlice';
import { faHeart, faComment, faRetweet, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './posts.module.css';
import moment from 'moment';

export default function Post(post) {
    const dispatch = useDispatch();
    const { name, username, timeStamp, hastags, img, id, retweets, comments, shared, likes, isLiked } = useSelector(state => state.counter.posts[post.index]);
    return (
        <div key={id} className={styles.row}>
            <div className={styles.header}>
                <div className={styles.col}>{name}</div>
                <div className={styles.col}>@{username},</div>
                <div className={styles.col}>{moment([new Date(timeStamp).getFullYear(), new Date(timeStamp).getMonth(), new Date(timeStamp).getDay()]).fromNow(true)}</div>
            </div>
            <div className={styles.hasTagCont}>
                <div className={styles.col}>{hastags}</div>
            </div>
            <div className={styles.imgCont}>
                <img onClick={() => dispatch(togglePopUp(id))} className={styles.img} src={process.env.PUBLIC_URL + img}></img>
            </div>
            <div className={styles.postBtnCont}>
                <div className={styles.postBtn}>
                    <FontAwesomeIcon icon={faComment} />
                    <span className={styles.padding}>{comments}</span>
                </div>
                <div className={styles.postBtn}>
                    <FontAwesomeIcon icon={faRetweet} />
                    <span className={styles.padding}>{retweets}</span>
                </div>
                <div className={styles.postBtn}>
                    <FontAwesomeIcon style={{cursor:'pointer'}} className={(isLiked?styles.darkColor:'')} onClick={() => dispatch(like(id))} icon={faHeart} />
                    <span className={styles.padding}>{likes}</span>
                </div>
                <div className={styles.postBtn}>
                    <FontAwesomeIcon icon={faUpload} />
                    <span className={styles.padding}>{shared}</span>
                </div>
            </div>
        </div>
    )

}