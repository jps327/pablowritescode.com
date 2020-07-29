import React from 'react';

import SidebarLink from './SidebarLink';

export default function Sidebar(): JSX.Element {
  return (
    <div className="inline-block py-8 space-y-4">
      <SidebarLink to="/">Home</SidebarLink>
      <SidebarLink to="/talks/">Talks</SidebarLink>
      <SidebarLink to="/contact/">Contact</SidebarLink>
    </div>
  );
}
