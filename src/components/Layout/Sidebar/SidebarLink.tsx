import React from 'react';
import { Link } from 'gatsby';

type Props = {
  children: React.ReactNode,
  to: string,
};

export default function SidebarLink({ children, to }: Props): JSX.Element {
  return (
    <div className="block pl-16 pr-16 text-xl">
      <Link
        to={to}
        className="hover:text-blue-600 focus:text-blue-800 transition-all duration-150"
      >
        {children}
      </Link>
    </div>
  );
}
