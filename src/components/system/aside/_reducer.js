import { OPEN_ASIDE, CLOSE_ASIDE, TOGGLE_ASIDE } from './_action';

const initial = {
  isAsideOpen: true
};

const asideReducer = (state = initial, action) => {
  switch (action.type) {
    case OPEN_ASIDE:
      return { ...state, isAsideOpen: true };
    case CLOSE_ASIDE:
      return { ...state, isAsideOpen: false };
    case TOGGLE_ASIDE:
      return { ...state, isAsideOpen: !state.isAsideOpen };
    default:
      return state;
  }
};

export default asideReducer;
