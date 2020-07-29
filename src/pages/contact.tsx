import React from 'react';

import ExternalLink from '../components/ui/ExternalLink';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function ContactPage(): JSX.Element {
  return (
    <Layout headingTitle="Contact">
      <SEO title="Contact" />
      <p>
        You can reach me on{' '}
        <ExternalLink to="https://twitter.com/PabloSarmiento">
          Twitter
        </ExternalLink>{' '}
        or{' '}
        <ExternalLink to="https://www.linkedin.com/in/juan-pablo-sarmiento-a4b74034/">
          LinkedIn
        </ExternalLink>
        .
      </p>
    </Layout>
  );
}
