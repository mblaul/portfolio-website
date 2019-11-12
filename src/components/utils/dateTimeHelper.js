import { isSiteBuilt } from './buildHelper';

export function formatDate(date) {
  if (isSiteBuilt) {
    const locale = window.navigator.userLanguage || window.navigator.language;
    return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeStyle: 'short' }).format(date);
  }
}
