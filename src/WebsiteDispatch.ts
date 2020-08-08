import React from 'react';

type WebsiteState = {
  isMenuOpen: boolean,
};

type WebsiteAction = { type: 'MENU_TOGGLE' };

export const INITIAL_WEBSITE_STATE: WebsiteState = {
  isMenuOpen: false,
};

export function websiteReducer(
  state: WebsiteState,
  action: WebsiteAction,
): WebsiteState {
  const { isMenuOpen } = state;
  switch (action.type) {
    case 'MENU_TOGGLE':
      return { ...state, isMenuOpen: !isMenuOpen };
    default:
      throw new Error(`Unhandled dispatch action: '${action.type}'`);
  }
}

export default React.createContext<(action: WebsiteAction) => void>(() => undefined);
