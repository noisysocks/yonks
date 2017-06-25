export function addProtocol(url) {
  if (url.includes('://')) {
    return url;
  }

  return 'http://' + url;
}
