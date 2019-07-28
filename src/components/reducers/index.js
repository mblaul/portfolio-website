export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleSidedrawer':
      return {
        ...state,
        sidedrawerOpen: !state.sidedrawerOpen,
      };
    default:
      return state;
  }
};
