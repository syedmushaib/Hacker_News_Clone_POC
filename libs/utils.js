import { formatDistanceStrict } from 'date-fns';

export function getHostnameFromRegex(url) {
  // run against regex
  const matches = url && url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
  // extract hostname (will be null if no match is found)
  return matches && matches[1];
}

export function dateFormate (created_at) {
  return formatDistanceStrict(
    new Date(),
    new Date(created_at)
  );
}