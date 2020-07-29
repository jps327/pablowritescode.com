import { Link } from 'gatsby';
import React from 'react';

type Props = {
  fullName: string,
  jobTitle: string,
};

export default function Header({ fullName, jobTitle }: Props): JSX.Element {
  return (
    <header className="px-16 py-3 bg-gray-200">
      <div>
        <Link to="/">
          <h1 className="inline-block text-2xl">{fullName}</h1>
          <span className="inline-block ml-4">{jobTitle}</span>
        </Link>
      </div>
    </header>
  );
}
