import type { NextPage, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { Layout, TopTpl } from '@/components/templates';
import { Meta } from '@/components/molecules';
import { GuestAPI } from '~/apis/containers';
import { RLSProvider } from '@/context';

export const getStaticProps = async () => {
  GuestAPI.fetchSns();

  return {
    props: {},
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Top: NextPage<Props> = ({}) => {
  const { pathname, asPath } = useRouter();

  return (
    <>
      <Meta pageFullPath={pathname} pageAsPath={asPath} />
      <Layout disableRightClick={true}>
        <RLSProvider>
          <div data-scroll-container>
            <TopTpl />
          </div>
        </RLSProvider>
      </Layout>
    </>
  );
};

export default Top;
