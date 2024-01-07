import { OAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '~/lib/services/firebase/auth/common';
import { showErrorToast } from '~/lib/services/firebase/utils';

const microsoftProvider = new OAuthProvider('microsoft.com');

export const loginWithMicrosoft = async () => {
  signInWithPopup(auth, microsoftProvider).catch((err) => showErrorToast(err));
};
