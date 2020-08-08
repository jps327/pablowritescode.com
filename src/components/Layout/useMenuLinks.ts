import { useStaticQuery, graphql } from 'gatsby';

type MenuLinkT = {
  label: string,
  to: string,
};

export default function useMenuLinks(): MenuLinkT[] {
  const data = useStaticQuery(graphql`
    query MenuLinksQuery {
      site {
        siteMetadata {
          menuLinks {
            label
            to
          }
        }
      }
    }
  `);
  return data.site.siteMetadata.menuLinks;
}
