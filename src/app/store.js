import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../posts/post/postsSlice';

export default configureStore({
  reducer: {
    counter: postsReducer,
  },
});
