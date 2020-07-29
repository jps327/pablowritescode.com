import React from 'react';

import ExternalLink from '../components/ui/ExternalLink';
import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';

export default function IndexPage(): JSX.Element {
  return (
    <Layout headingTitle="Hi, I'm Pablo">
      <SEO title="Home" />
      <div
        style={{ maxWidth: '150px', width: '150px' }}
        className="float-left mr-6"
      >
        <Image />
      </div>

      <p>
        I&apos;m the Frontend Engineering Team Lead at{' '}
        <ExternalLink to="https://www.zenysis.com/">Zenysis</ExternalLink> where
        I work on data analysis systems to help oragnizations make better
        decisions with their public health data. Before that I was a
        Forward-Deployed Engineer on{' '}
        <ExternalLink to="https://www.palantir.com/">
          Palantir&apos;s
        </ExternalLink>{' '}
        Philanthropy Team where I worked on projects in{' '}
        <ExternalLink to="https://reliefweb.int/report/philippines/palantir-technology-enables-intelligent-typhoon-response">
          disaster relief
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink to="https://wget2014.files.wordpress.com/2014/04/16_impact-study-palantirs-response-to-typhoon-haiyan.pdf">
          humanitarian emergencies
        </ExternalLink>
        ,{' '}
        <ExternalLink to="https://www.youtube.com/watch?v=d298LZd38Kk">
          food security
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink to="https://www.youtube.com/watch?v=xjK1Sas2jIc">
          agriculture
        </ExternalLink>
        , and{' '}
        <ExternalLink to="https://www.youtube.com/watch?v=u5StPcB4uII">
          homelessness
        </ExternalLink>
        .
      </p>
      <br />
      <p>
        I am passionate about ethical applications of technology in social
        impact, public health, sexual health, international development, and
        humanitarian emergencies.
      </p>
    </Layout>
  );
}
