export function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'www.antonyevans.com') {
    url.hostname = 'antonyevans.com';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
