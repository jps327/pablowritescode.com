import React from 'react';

type Props = {
  children: React.ReactNode,
  to: string,
};

export default function ExternalLink({ children, to }: Props): JSX.Element {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
