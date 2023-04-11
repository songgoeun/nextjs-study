import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const AboutPage = () => (
  <div>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/login">login test</Link>
    </p>
    <p>
      <Link href="/">Go Home</Link>
    </p>
  </div>
);

export default AboutPage;
