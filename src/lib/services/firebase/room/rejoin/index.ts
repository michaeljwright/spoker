import { child, get, update } from 'firebase/database';

import { getCurrentUser } from '~/lib/services/firebase/auth/getCurrentUser';
import { roomsData } from '~/lib/services/firebase/room/common';
import type { RoleType } from '~/lib/types/user';

export const rejoinRoom = async (roomId: string, role?: RoleType | null) => {
  const currentUser = getCurrentUser();

  await get(child(roomsData, `${roomId}/users/${currentUser?.uid}`)).then(
    async (snap) => {
      if (snap.exists()) {
        await update(snap.ref, {
          isConnected: true,
        });
      }
    }
  );
};
