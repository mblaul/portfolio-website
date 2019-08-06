export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleSidedrawer':
      return {
        ...state,
        sidedrawerOpen: !state.sidedrawerOpen,
      };
    case 'setScreenSize':
      return {
        ...state,
        screenSize: action.screenSize,
      };
    default:
      return state;
  }
};
