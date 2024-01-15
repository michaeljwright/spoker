import { useRouter } from 'next/router';
import * as React from 'react';

import { RESTRICTED_ROUTES } from '~/lib/constants/routes/restricted';
import { useAuth } from '~/lib/stores/auth';

import FullScreenLoading from './FullScreenLoading';
import { useAuthObserver } from './useAuthObserver';

type RouteWrapperProps = {
  children: React.ReactNode;
};

const RouteWrapper = ({ children }: RouteWrapperProps) => {
  const router = useRouter();
  const { pathname } = router;
  const { isLoadingAuth } = useAuthObserver();

  const currentUser = useAuth((state) => state.currentUser);
  const [busy, setBusy] = React.useState<boolean>(false);

  const isRestrictedRoute = React.useMemo(
    () => RESTRICTED_ROUTES.includes(pathname),
    [pathname]
  );

  const routeCheck = React.useCallback(() => {
    if (currentUser && isRestrictedRoute) {
      // setBusy(true);
      router.replace('/').then(() => setBusy(false));
      return;
    }

    setBusy(false);
  }, [currentUser, isRestrictedRoute, router]);

  React.useEffect(() => {
    routeCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, currentUser]);

  if (busy || isLoadingAuth) {
    return <FullScreenLoading />;
  }

  return children as React.ReactElement;
};

export default RouteWrapper;
