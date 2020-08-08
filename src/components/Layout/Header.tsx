import { Link } from 'gatsby';
import React from 'react';

import Icon from '../ui/Icon';
import WebsiteDispatch from '../../WebsiteDispatch';

type Props = {
  fullName: string,
  jobTitle: string,
};

export default function Header({ fullName, jobTitle }: Props): JSX.Element {
  const dispatch = React.useContext(WebsiteDispatch);

  const onMenuIconClick = React.useCallback(
    () => dispatch({ type: 'MENU_TOGGLE' }),
    [],
  );

  return (
    <header className="py-3 pl-16 pr-4 bg-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <h1 className="inline-block text-xl sm:text-2xl">{fullName}</h1>
            <span className="hidden sm:ml-4 sm:inline-block">{jobTitle}</span>
          </Link>
        </div>
        <div
          role="button"
          aria-label="Menu"
          className="sm:hidden"
          tabIndex={0}
          onClick={onMenuIconClick}
          onKeyPress={onMenuIconClick}
        >
          <Icon type="menu" width={26} />
        </div>
      </div>
    </header>
  );
}
