import { IOptions } from "./interfaces"

const defaultOptions: Required<IOptions> = {
    domainBlacklist: [],
    allowIp: false,
    protocols: ['http:', 'https:'],
    maxLength: 2048,
    minLength: 5,
    allowBasicAuth: false,
    allowPorts: false,
}

export function createOptions(options: IOptions) {
    return {
        ...defaultOptions,
        ...options,
    }
}
