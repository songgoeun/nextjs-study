import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const IndexPage = () => (
  <div>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </div>
);

export default IndexPage;
