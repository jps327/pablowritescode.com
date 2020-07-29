/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './styles.css';

import Header from './Header';
import Sidebar from './Sidebar';
import LayoutCSS from './index.module.css';

type Props = {
  headingTitle: string,
  children: React.ReactNode,
};

// TODO(jps327): unhide when footer is ready
const HIDE_FOOTER = true;

export default function Layout({ children, headingTitle }: Props): JSX.Element {
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

  const { fullName, jobTitleShort } = data.site.siteMetadata;
  return (
    <>
      <Header fullName={fullName} jobTitle={jobTitleShort} />
      <div className="flex">
        <Sidebar />
        <div className="inline-block w-full py-8">
          <main className={LayoutCSS.main}>
            <h1 className="mb-4 text-4xl font-bold">{headingTitle}</h1>
            {children}
          </main>
          {!HIDE_FOOTER && (
            <footer>
              © {new Date().getFullYear()} {fullName}
            </footer>
          )}
        </div>
      </div>
    </>
  );
}
