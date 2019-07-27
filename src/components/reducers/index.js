export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeSidedrawer':
      return {
        ...state,
        sidedrawerOpen: !state.sidedrawerOpen,
      };
    default:
      return state;
  }
};
