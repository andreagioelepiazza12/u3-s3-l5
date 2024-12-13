import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../reducers/sidebarReducer';
import likesReducer from '../reducers/likesReducer';
import playerReducer from '../reducers/playerReducer';

const store = configureStore({
  reducer: {
    player: playerReducer,
    sidebar: sidebarReducer,
    likes: likesReducer,
  },
});

export default store;