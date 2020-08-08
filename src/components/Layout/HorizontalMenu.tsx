import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import useMenuLinks from './useMenuLinks';

type Props = {
  isOpen: boolean,
};

function HorizontalMenu({ isOpen }: Props): JSX.Element {
  const menuLinks = useMenuLinks();

  const links = React.useMemo(
    () => menuLinks.map(link => (
      <div key={link.to} className="text-lg">
        <Link
          to={link.to}
          className="hover:text-blue-600 focus:text-blue-800 transition-all duration-150"
        >
          {link.label}
        </Link>
      </div>
    )),
    [menuLinks],
  );

  const containerClassName = classNames('flex justify-evenly space-x-4', {
    hidden: !isOpen,
    'mt-4': isOpen,
  });

  return <div className={containerClassName}>{links}</div>;
}

export default React.memo(HorizontalMenu);
