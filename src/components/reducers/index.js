export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleIntro':
      return {
        ...state,
        introExpanded: !state.introExpanded,
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
