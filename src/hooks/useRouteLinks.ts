import { useMemo } from 'react';

import { PATH_BLOG, PATH_CONTACT, PATH_HOME } from '../routes/router.path';

const useRouteLinks = () => {
  const headerLinks = useMemo(
    () => [
      {
        href: PATH_HOME as string,
        label: 'Home' as string,
      },
      {
        href: '#feature' as string,
        label: 'Feature' as string,
      },
      {
        href: PATH_CONTACT as string,
        label: 'Contact' as string,
      },
      {
        href: '#method' as string,
        label: 'Methodology' as string,
      },
      {
        href: PATH_BLOG as string,
        label: 'Blog' as string,
      },
    ],
    [],
  );

  return headerLinks;
};

export default useRouteLinks;
