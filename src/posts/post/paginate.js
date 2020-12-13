import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    previous,
    next,
    getState
} from './postsSlice';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './posts.module.css';
import moment from 'moment';

export default function Paginate() {
    const dispatch = useDispatch();
    const state = useSelector(getState);
   return (
        <div className={styles.paginateCont}>
           <FontAwesomeIcon className={styles.arrow} onClick={() => dispatch(previous())} icon={faArrowLeft} />
           <FontAwesomeIcon className={styles.arrow} onClick={() => dispatch(next())} icon={faArrowRight} />
        </div>
    )

}