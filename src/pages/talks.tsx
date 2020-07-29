import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import ExternalLink from '../components/ui/ExternalLink';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

type TalkInfo = {
  eventTitle: string,
  eventLink: string,
  talkTitle: string
  years: Array<number>,
  talkLink: string | null,
};

export default function TalksPage(): JSX.Element {
  const data = useStaticQuery(graphql`
    query TalksQuery {
      site {
        siteMetadata {
          talks {
            eventTitle
            eventLink
            talkLink
            talkTitle
            years
          }
        }
      }
    }
  `);

  const { talks } = data.site.siteMetadata;
  const talkRows = talks.map(({
    eventTitle,
    eventLink,
    talkTitle,
    years,
    talkLink,
  }: TalkInfo) => (
    <div key={`${eventLink}-${eventTitle}`}>
      <ExternalLink to={eventLink}>{eventTitle}</ExternalLink>{' '}
      ({years.join(', ')}){' '}
      {talkLink != null ? <ExternalLink to={talkLink}>{talkTitle}</ExternalLink> : talkTitle}
    </div>
  ));

  return (
    <Layout headingTitle="Talks">
      <SEO title="Talks" />
      <div className="space-y-4">
        <p>
          <Link to="/contact/">Contact me</Link> if you&apos;d like me to give a
          talk at your event.
        </p>
        <div className="space-y-3">
          {talkRows}
        </div>
      </div>
    </Layout>
  );
}
