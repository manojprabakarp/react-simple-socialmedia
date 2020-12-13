import { createSlice } from '@reduxjs/toolkit';
const getPosts = [
  {
    id: 0,
    isLiked: false,
    likes: 290,
    retweets: 5,
    comments: 2,
    shared: 99,
    img: 'img1.jpg',
    hastags: '#adtr, #word,#poplur,#news',
    username: 'manojprabakar',
    name: 'Manoj',
    timeStamp: 1601144457087,
    proThumb: './thumb.png'
  },
  {
    id: 1,
    isLiked: false,
    likes: 3,
    retweets: 5,
    comments: 2,
    img: 'img2.jpg',
    hastags: '#nature,#photography,#news',
    username: 'pravinkumard',
    name: 'Pravin Kumar',
    timeStamp: 160114445709,
    proThumb: './thumb.png'
  },
  {
    id: 2,
    isLiked: false,
    likes: 20,
    retweets: 5,
    comments: 2,
    img: 'img3.jpg',
    hastags: '#snowskating, #wordbestskating,#wideangle',
    username: 'rahulsr',
    name: 'Raghul S',
    timeStamp: 160114445708,
    proThumb: './thumb.png'
  },
  {
    id: 3,
    isLiked: false,
    likes: 200,
    retweets: 5,
    comments: 2,
    img: 'img3.jpg',
    hastags: '#snowskating, #wordbestskating,#wideangle',
    username: 'rahulsr',
    name: 'Raghul S',
    timeStamp: 160114445708,
    proThumb: './thumb.png'
  },
  {
    id: 4,
    isLiked: false,
    likes: 280,
    retweets: 5,
    comments: 2,
    img: 'img3.jpg',
    hastags: '#snowskating, #wordbestskating,#wideangle',
    username: 'rahulsr',
    name: 'Raghul S',
    timeStamp: 160114445708,
    proThumb: './thumb.png'
  },
  {
    id: 5,
    isLiked: false,
    likes: 230,
    retweets: 5,
    comments: 2,
    img: 'img3.jpg',
    hastags: '#snowskating, #wordbestskating,#wideangle',
    username: 'rahulsr',
    name: 'Raghul S',
    timeStamp: 160114445708,
    proThumb: './thumb.png'
  },
  {
    id: 6,
    isLiked: false,
    likes: 120,
    retweets: 5,
    comments: 2,
    img: 'img3.jpg',
    hastags: '#snowskating, #wordbestskating,#wideangle',
    username: 'rahulsr',
    name: 'Raghul S',
    timeStamp: 160114445708,
    proThumb: './thumb.png'
  },
  {
    id: 7,
    isLiked: false,
    likes: 250,
    retweets: 5,
    comments: 2,
    img: 'img3.jpg',
    hastags: '#snowskating, #wordbestskating,#wideangle',
    username: 'rahulsr',
    name: 'Raghul S',
    timeStamp: 160114445708,
    proThumb: './thumb.png'
  },
  {
    id: 8,
    isLiked: false,
    likes: 920,
    retweets: 5,
    comments: 2,
    img: 'img3.jpg',
    hastags: '#snowskating, #wordbestskating,#wideangle',
    username: 'rahulsr',
    name: 'Raghul S',
    timeStamp: 160114445708,
    proThumb: './thumb.png'
  },
  {
    id: 9,
    isLiked: false,
    likes: 11,
    retweets: 5,
    comments: 2,
    img: 'img3.jpg',
    hastags: '#snowskating, #wordbestskating,#wideangle',
    username: 'rahulsr',
    name: 'Raghul S',
    timeStamp: 160114445708,
    proThumb: './thumb.png'
  },
  {
    id: 10,
    isLiked: false,
    likes: 233,
    retweets: 5,
    comments: 2,
    img: 'img2.jpg',
    hastags: '#snowskating, #wordbestskating,#wideangle',
    username: 'rahulsr',
    name: 'Raghul S',
    timeStamp: 160114445708,
    proThumb: './thumb.png'
  },
];
export const postsSlice = createSlice({
  name: 'counter',
  initialState: {
    isLiked: false,
    isPopOpen: false,
    currentId: 1,
    pageLen: 10,
    pageCount: 1,
    posts: getPosts,
    name: 'Manoj',
    username: 'manojprabakar'
  },
  reducers: {
    like: (state, action) => {
      state.posts[action.payload].isLiked = !state.posts[action.payload].isLiked;
      state.posts[action.payload].isLiked ? state.posts[action.payload].likes++ : state.posts[action.payload].likes--;
    },
    togglePopUp: (state, action) => {
      state.currentId = action.payload;
      state.isPopOpen = !state.isPopOpen;
    },
    previous: state => {
      if (state.pageCount > 1) {
        state.pageCount--;
        if (state.pageCount < 1) state.pageCount = 1;
        if (state.pageCount > (Math.ceil(getPosts.length / state.pageLen))) state.pageCount = (Math.ceil(getPosts.length / state.pageLen));
        state.posts = [];
        for (var i = (state.pageCount - 1) * state.pageLen; i < (state.pageCount * state.pageLen); i++) {
          if (getPosts[i]) {
            state.posts.push(getPosts[i]);
          }
        }
      }
    },
    next: state => {
      if (state.pageCount < (Math.ceil(getPosts.length / state.pageLen))) {
        state.pageCount++;
      }
      if (state.pageCount < 1) state.pageCount = 1;
      if (state.pageCount > (Math.ceil(getPosts.length / state.pageLen))) state.pageCount = (Math.ceil(getPosts.length / state.pageLen));
      state.posts = [];
      for (var i = (state.pageCount - 1) * state.pageLen; i < (state.pageCount * state.pageLen); i++) {
        if (getPosts[i]) {
          state.posts.push(getPosts[i]);
        }
      }
    }
  },
});
export const isPopupOpen = state => { return state.counter.isPopOpen };
export const getPostsJson = state => { return state.counter.posts };
export const { like, togglePopUp, previous, next } = postsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getCurrent = state => state.counter.currentId;
export const getState = state => state;

export default postsSlice.reducer;
