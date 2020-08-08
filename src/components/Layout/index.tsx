import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './styles.css';

import Header from './Header';
import LayoutCSS from './index.module.css';
import HorizontalMenu from './HorizontalMenu';
import VerticalMenu from './VerticalMenu';
import WebsiteContext from '../../WebsiteContext';
import useWindowSize, { SCREEN_SIZE } from '../../hooks/useWindowSize';

type Props = {
  headingTitle: string,
  children: React.ReactNode,
};

export default function Layout({ children, headingTitle }: Props): JSX.Element {
  const websiteState = React.useContext(WebsiteContext);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          fullName
          jobTitleShort
        }
      }
    }
  `);

  const [windowWidth] = useWindowSize();
  const { fullName, jobTitleShort } = data.site.siteMetadata;
  const isPhoneScreen = windowWidth < SCREEN_SIZE.PHONE;

  return (
    <div className="flex flex-col min-h-screen">
      <Header fullName={fullName} jobTitle={jobTitleShort} />
      {isPhoneScreen && <HorizontalMenu isOpen={websiteState.isMenuOpen} />}

      <div className="flex">
        {!isPhoneScreen && <VerticalMenu />}
        <div className="inline-block w-full px-16 py-8">
          <main className={LayoutCSS.main}>
            <h1 className="mb-4 text-4xl font-bold">{headingTitle}</h1>
            {children}
          </main>
        </div>
      </div>
      <footer className="self-center pb-6 mt-auto">
        <div>
          © {new Date().getFullYear()} {fullName}
        </div>
      </footer>
    </div>
  );
}
