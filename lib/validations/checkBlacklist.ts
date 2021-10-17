import { IOptions } from "../interfaces";

export function checkBlacklist(url: URL, { domainBlacklist }: Required<IOptions>) {
    const isInvalid = domainBlacklist.includes(url.hostname);
    if (isInvalid) {
        throw new Error('This domain is forbidden');
    }
}