import * as React from 'react';

import { useRoomStore } from '~/lib/stores/room';
import { countAveragePoint, filterUserWithPoints } from '~/lib/utils/roomUtils';

export const useRoomPoint = () => {
  const { showVote, users } = useRoomStore((state) => ({
    showVote: state.showVote,
    users: state.users,
  }));

  const participantPoints = React.useMemo(() => {
    if (!showVote) {
      return [];
    }
    return filterUserWithPoints(users).map((user) => user.point ?? 0);
  }, [showVote, users]);

  const averagePoint = React.useMemo(() => {
    const filledPoints = participantPoints.filter((point) => point);
    return countAveragePoint(filledPoints);
  }, [participantPoints]);
  const highestPoint = React.useMemo(
    () => participantPoints.sort((a, b) => b - a)[0] ?? 0,
    [participantPoints]
  );

  return {
    averagePoint,
    highestPoint,
  };
};
