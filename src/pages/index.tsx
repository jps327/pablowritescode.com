import React from 'react';

import ExternalLink from '../components/ui/ExternalLink';
import Headshot from '../components/images/Headshot';
import Icon from '../components/ui/Icon';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ICON_HOVER_COLOR = '#4A5568'; // gray-700

export default function IndexPage(): JSX.Element {
  return (
    <Layout headingTitle="Hi, I'm Pablo">
      <SEO title="Home" />
      <div
        style={{ maxWidth: '150px', width: '150px' }}
        className="float-left mr-6"
      >
        <Headshot />
      </div>

      <p>
        I&apos;m the Frontend Engineering Team Lead at{' '}
        <ExternalLink to="https://www.zenysis.com/">Zenysis</ExternalLink> where
        I work on data analysis systems to help organizations make better
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
      <div className="flex justify-center mt-4 space-x-2">
        <Icon
          type="twitter"
          width={32}
          link="https://twitter.com/PabloSarmiento"
          hoverColor={ICON_HOVER_COLOR}
        />
        <Icon
          type="linkedin"
          width={32}
          link="https://www.linkedin.com/in/juan-pablo-sarmiento-a4b74034/"
          hoverColor={ICON_HOVER_COLOR}
        />
        <Icon
          type="github"
          width={33}
          link="https://github.com/jps327"
          hoverColor={ICON_HOVER_COLOR}
        />
      </div>
    </Layout>
  );
}
