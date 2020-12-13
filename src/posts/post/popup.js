import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    like,
    togglePopUp
} from './postsSlice';
import { faHeart, faComment, faRetweet, faUpload, faAngleDown, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart, faComment as farComment, faRetweet as farRetweet, faMobile as farMobile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './posts.module.css';
import moment from 'moment';

export default function Popup(post) {
   const dispatch = useDispatch();
    const { name, username, timeStamp, hastags, img, id, retweets, comments, shared, likes, isLiked } = useSelector(state => state.counter.posts[state.counter.currentId]);
   return (
        <div key={id} className={styles.popupCont}>
            <div className={styles.popCenterCont}>
                <div className={styles.closePopupCont}>
                    <FontAwesomeIcon className={styles.curPointer} onClick={() => dispatch(togglePopUp(id))} icon={faAngleDown} />
                </div>
                <div className={styles.popHeader}>
                    <div className={styles.profileIcon}>
                        <FontAwesomeIcon className={styles.profileFont} icon={faMobile} />
                    </div>
                    <div className={styles.whiteHeader}>{name}</div>
                    <div className={styles.userHeader}>@{username}, </div>
                    <div className={styles.userHeader}>{moment([new Date(timeStamp).getFullYear(), new Date(timeStamp).getMonth(), new Date(timeStamp).getDay()]).fromNow(true)}</div>
                    <div className={styles.hasBTagCont}>
                        <div className={styles.hasBHeader}>{hastags}</div>
                    </div>
                </div>
                <div className={styles.popupImgCont}>
                    <img onClick={() => dispatch(togglePopUp(id))} className={styles.popUpImg} src={process.env.PUBLIC_URL + img}></img>
                </div>
                <div className={styles.popUpButtonCont}>
                    <div className={styles.postBtn}>
                        <FontAwesomeIcon icon={farComment} />
                        <span className={styles.padding}>{comments}</span>
                    </div>
                    <div className={styles.postBtn}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <span className={styles.padding}>{retweets}</span>
                    </div>
                    <div className={styles.postBtn}>
                        <FontAwesomeIcon style={{cursor:'pointer'}} className={(isLiked ? styles.darkColor : '')} onClick={() => dispatch(like(id))} icon={farHeart} />
                        {<span className={styles.padding}>{likes}</span>}
                    </div>
                    <div className={styles.postBtn}>
                        <FontAwesomeIcon icon={faUpload} />
                        <span className={styles.padding}>{shared}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}