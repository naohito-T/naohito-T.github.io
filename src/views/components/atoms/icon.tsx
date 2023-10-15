import type { NextComponentType, NextPageContext } from 'next';
import GitHubIcon from '@mui/icons-material/GitHub';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import TwitterIcon from '@mui/icons-material/Twitter';

type Props = {
  typeIcon: 'blog' | 'github' | 'lens' | 'portfolio' | 'twitter';
  fontSize?: 'inherit' | 'large' | 'medium' | 'small' | undefined;
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
