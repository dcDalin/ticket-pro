import { useEffect, useState } from 'react';

import { REDIRECT_TO } from '@/constants/localStorage';
import { HOME } from '@/constants/routes';

export default function useRedirectTo() {
  const [redirectTo, setRedirectTo] = useState(HOME);

  useEffect(() => {
    setRedirectTo(localStorage.getItem(REDIRECT_TO) || HOME);
  }, []);

  return redirectTo;
}
