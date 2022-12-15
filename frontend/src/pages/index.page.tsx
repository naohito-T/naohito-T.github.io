import type { NextPage, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
// components
import { TopTpl, Layout } from '@/components/templates';
import { Meta } from '@/components/molecules';
import { GuestAPI } from '~/apis/containers';

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
        <TopTpl />
      </Layout>
    </>
  );
};

export default Top;
