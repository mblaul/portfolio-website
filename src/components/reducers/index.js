export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleIntroExpanded':
      return {
        ...state,
        introExpanded: !state.introExpanded,
      };
    case 'toggleMobileNavExpanded':
      return {
        ...state,
        mobileNavExpanded: !state.mobileNavExpanded,
      };
    case 'setScreenSize':
      return {
        ...state,
        screenSize: action.screenSize,
      };
    case 'setIsMobile':
      return {
        ...state,
        isMobile: action.isMobile,
      };
    case 'setSelectedTags':
      return {
        ...state,
        selectedTags: action.selectedTags,
      };
    default:
      return state;
  }
};
