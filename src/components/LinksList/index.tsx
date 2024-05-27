import React from 'react';
import Link from '@docusaurus/Link';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface HomepageLinkProps {
  to: string;
  icon?: IconProp;
  text: string;
  color?: string;
}

export interface HomepageLinkListProps {
  links: HomepageLinkProps[];

  color?: string;
}

export const LinkWithIcon = ({ to, icon, text, color }: HomepageLinkProps) => {
  return (
    <li style={{ marginBottom: 10 }}>
      <Link to={to}>
        <span style={{ fontWeight: 'bold', color: color ? color : '' }}>
          {text}
        </span>
      </Link>
    </li>
  );
};

export const LinksList: React.FC<HomepageLinkListProps> = ({
  links,
  color,
}): JSX.Element => {
  return (
    <ul>
      {links.map((linkProps, idx) => (
        <LinkWithIcon
          key={idx}
          to={linkProps.to}
          text={linkProps.text}
          icon={linkProps.icon}
          color={color}
        />
      ))}
    </ul>
  );
};
