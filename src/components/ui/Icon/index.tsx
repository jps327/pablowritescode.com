import React from 'react';

import GithubIcon from './GithubIcon';
import LinkedInIcon from './LinkedInIcon';
import TwitterIcon from './TwitterIcon';

type IconType = 'twitter' | 'linkedin' | 'github';

type Props = {
  type: IconType,

  color?: string,
  hoverColor?: string,
  width?: number,
  link?: string,
};

export default function Icon({
  type,
  color = '#000000',
  hoverColor = undefined,
  link = undefined,
  width = 24,
}: Props): JSX.Element {
  const [isHovered, setIsHovered] = React.useState(false);
  let IconElement;
  const onHover = () => setIsHovered(true);
  const onUnhover = () => setIsHovered(false);

  switch (type) {
    case 'twitter': {
      IconElement = TwitterIcon;
      break;
    }
    case 'linkedin': {
      IconElement = LinkedInIcon;
      break;
    }
    case 'github': {
      IconElement = GithubIcon;
      break;
    }
    default:
      throw new Error(`Invalid icon type received: ${type}`);
  }

  const icon = (
    <div
      onMouseOver={onHover}
      onFocus={onHover}
      onMouseOut={onUnhover}
      onBlur={onUnhover}
    >
      <IconElement
        fill={isHovered && hoverColor !== undefined ? hoverColor : color}
        width={width}
        transition="all 150ms"
      />
    </div>
  );

  if (link === undefined) {
    return icon;
  }

  return (
    <a href={link} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
}
