export function hasTLD(url: URL) {
    if (!url.hostname.includes('.')) {
        throw Error('invalid url');
    }
}