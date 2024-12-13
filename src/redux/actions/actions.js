export const setCurrentSong = (song) => ({
  type: 'SET_CURRENT_SONG',
  payload: song,
});

export const toggleSidebar = () => ({
  type: 'TOGGLE_SIDEBAR',
});

export const toggleLike = (song) => ({
  type: 'TOGGLE_LIKE',
  payload: song,
});