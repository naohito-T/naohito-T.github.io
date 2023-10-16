import type { NextPage, InferGetStaticPropsType } from 'next';
import { Footer } from '@/views/components/molecules';
import { Layout, TopTpl } from '@/views/components/templates';

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const TopPage: NextPage<Props> = ({}) => {
  return (
    <Layout disableRightClick={true}>
      <TopTpl data-scroll-section />
      <Footer />
    </Layout>
  );
};

export default TopPage;
