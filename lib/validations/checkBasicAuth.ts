export function checkBasicAuth(url: URL) {
    if (url.username !== '' || url.password !== '') {
        throw Error('Basic auth is not allowed');
    }
}