/* eslint-disable */
import React from 'react';

import WebsiteContext from './src/WebsiteContext';
import WebsiteDispatch, {
  INITIAL_WEBSITE_STATE,
  websiteReducer,
} from './src/WebsiteDispatch';

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

function WebsiteWrapper({ children }) {
  const [state, dispatch] = React.useReducer(
    websiteReducer,
    INITIAL_WEBSITE_STATE,
  );

  return (
    <WebsiteContext.Provider value={state}>
      <WebsiteDispatch.Provider value={dispatch}>
        {children}
      </WebsiteDispatch.Provider>
    </WebsiteContext.Provider>
  );
}

export const wrapPageElement = ({ element }) => (
  <WebsiteWrapper>{element}</WebsiteWrapper>
);
