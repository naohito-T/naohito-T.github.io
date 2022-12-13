import type { NextPage, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
// components
import { TopTpl, Layout } from '@/components/templates';
import { Meta } from '@/components/molecules';


export const getStaticProps = async () => {
  return {
    props: {},
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Top: NextPage<Props> = ({}) => {
  const { pathname, asPath } = useRouter();
  console.log(pathname);
  console.log(asPath);
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
