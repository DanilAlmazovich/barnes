export default function (locale: string) {
  return import(`./locales/${locale}.json`);
}
