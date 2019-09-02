export function formatDate(date) {
  const locale = window.navigator.userLanguage || window.navigator.language;
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeStyle: 'short' }).format(date);
}
