import type { NextComponentType, NextPageContext } from 'next';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import RssFeedIcon from '@mui/icons-material/RssFeed';

type Props = {
  typeIcon: 'lens' | 'portfolio' | 'blog' | 'twitter' | 'github';
  fontSize?: 'small' | 'inherit' | 'large' | 'medium' | undefined;
};

export const Icon: NextComponentType<NextPageContext, null, Props> = ({
  typeIcon,
  fontSize = 'small',
}) => {
  switch (typeIcon) {
    case 'blog':
      return <RssFeedIcon fontSize={fontSize} />;
    case 'twitter':
      return <TwitterIcon fontSize={fontSize} />;
    case 'github':
      return <GitHubIcon fontSize={fontSize} />;
    default:
      return <></>;
  }
};
