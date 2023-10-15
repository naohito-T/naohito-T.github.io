import type { NextPage, InferGetStaticPropsType } from 'next';
import { Layout, TopTpl } from '@/views/components/templates';
import { RLSProvider } from '@/views/context';

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const TopPage: NextPage<Props> = ({}) => {
  return (
    <Layout disableRightClick={true}>
      <RLSProvider>
        <div data-scroll-container>
          <TopTpl />
        </div>
      </RLSProvider>
    </Layout>
  );
};

export default TopPage;
