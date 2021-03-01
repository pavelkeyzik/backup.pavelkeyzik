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
        <h3>Education:</h3>
        <ul>
          <li>Bachelor's degree, Polotsk State University (2019)</li>
          <li>Full-stack course, iTechArt (2018)</li>
          <li>Front-end course, Andersen (2016)</li>
          <li>HTML/CSS/Photoshop personal training, BelHard (2012)</li>
        </ul>
        <h3>My hobbies:</h3>
        <p>
          I'm keen on automotive photography. You can check my{' '}
          <a href="https://unsplash.com/@pavelkeyzik" target="_blank">
            Unsplash account
          </a>{' '}
          to see some of my pics. From time to time I try to make videos. It's
          really interesting to me too because it's like photography but with
          motions and music. You can see a couple of my videos{' '}
          <a
            href="https://www.youtube.com/channel/UCvuShrOlcCtLoJ7gEUwB0FA/videos"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <h3>Still have some questions?</h3>
        <p>
          If you want to know more about me then please,{' '}
          <Link href="/contact">contact me</Link>.
        </p>
      </ContentWidth>
    </Layout>
  );
}

export default AboutPage;
