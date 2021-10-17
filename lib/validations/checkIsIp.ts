import { isIP } from 'net';

export function checkIsIp(url: URL) {
    const result = isIP(url.hostname);
    if (result !== 0) {
        throw Error('Invalid url');
    }
}