import { LastWorks } from '../components/LastWorks';
import { Layout } from '../components/Layout';
import { ProfilePreview } from '../components/ProfilePreview';

function HomePage() {
  return (
    <Layout>
      <ProfilePreview />
      <LastWorks />
    </Layout>
  );
}

export default HomePage;
