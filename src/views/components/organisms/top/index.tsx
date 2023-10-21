import dynamic from 'next/dynamic';

export * from './intro';
export const About = dynamic(() => import('./about').then((mod) => mod.About), { ssr: false });
