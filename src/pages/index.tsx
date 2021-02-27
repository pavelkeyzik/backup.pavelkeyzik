import { ContentWidth } from '../components/ContentWidth';
import { Layout } from '../components/Layout';
import { ProfilePreview } from '../components/ProfilePreview';

function HomePage() {
  return (
    <Layout>
      <ProfilePreview />
      <ContentWidth>
        <div>Home Page</div>
      </ContentWidth>
    </Layout>
  );
}

export default HomePage;
