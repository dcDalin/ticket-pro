import { REDIRECT_TO } from '@/constants/localStorage';
import { HOME } from '@/constants/routes';

let redirectTo = HOME;

if (typeof window !== 'undefined') {
  redirectTo = localStorage.getItem(REDIRECT_TO) || HOME;
}

export default redirectTo;
