const initialState = [];

const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LIKE': {
      const song = action.payload; 
      const exists = state.some((s) => s.id === song.id);

      if (exists) {
        
        return state.filter((s) => s.id !== song.id);
      } else {
       
        return [...state, song];
      }
    }
    default:
      return state;
  }
};

export default likesReducer;