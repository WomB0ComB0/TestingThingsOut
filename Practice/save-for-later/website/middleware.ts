const locales = ['en-US', 'es-ES', 'zh-CN', 'vi', 'ja-JP'];

function getLocale(request: any) {
  const acceptLang = request.headers.get('Accept-Language');
  const locale = acceptLang ? acceptLang.split(',')[0].trim() : locales[0];
  return locales.includes(locale) ? locale : locales[0];
}

export async function middleware(request: any) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  const { default: languageDictionary } = await import(`@/messages/${locale}.json`);

  request.languageDictionary = languageDictionary;

  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
