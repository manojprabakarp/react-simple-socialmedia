import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getPostsJson,
  isPopupOpen
} from './postsSlice';
import Post from './post';
import Popup from './popup';
import styles from './posts.module.css';
import Paginate from './paginate';

export function Posts() {
  const posts = useSelector(getPostsJson);
  const popUp = useSelector(isPopupOpen);
  return (
    <React.Fragment>
      {popUp && <Popup />}
      <div>
        <div className={styles.container}>
          {posts.map((cur, index) => {
            return <Post props={cur} index={index} />
          })}
          <Paginate />
        </div>
      </div>
    </React.Fragment>
  );
}
