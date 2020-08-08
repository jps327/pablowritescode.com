import React from 'react';
import { Link } from 'gatsby';
import useMenuLinks from './useMenuLinks';

function VerticalMenu(): JSX.Element {
  const menuLinks = useMenuLinks();

  const links = React.useMemo(
    () => menuLinks.map(link => (
      <div key={link.to} className="block pl-16 text-xl">
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

  return <div className="py-8 space-y-4">{links}</div>;
}

export default React.memo(VerticalMenu);
