import Link from 'next/link';
import { ContentWidth } from '../components/ContentWidth';
import { Layout } from '../components/Layout';

function AboutPage() {
  return (
    <Layout>
      <ContentWidth>
        <h2>About Me</h2>
        <p>
          I started to learn Web development in 2012 and got my first internship
          in 2017.
        </p>
        <p>
          I've been working as a Full-stack Engineer for one year but realized
          that I'm more visual person. So, now I do more Front-end and Design
          work.
        </p>
        <h3>List of technologies that I use every single day:</h3>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>Git</li>
          <li>Docker</li>
          <li>Figma</li>
        </ul>
        <h3>I'm familiar with:</h3>
        <ul>
          <li>Node</li>
          <li>Next.js</li>
          <li>Gatsby.js</li>
          <li>GraphQL (Apollo)</li>
        </ul>
        <p>
          If you want to know more about me then please,{' '}
          <Link href="/contact">contact me</Link>.
        </p>
      </ContentWidth>
    </Layout>
  );
}

export default AboutPage;
