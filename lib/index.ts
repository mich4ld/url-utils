import { IOptions } from "./interfaces";
import { checkBasicAuth } from "./validations/checkBasicAuth";
import { checkBlacklist } from "./validations/checkBlacklist";
import { checkCharacters } from "./validations/checkCharacters";
import { hasTLD } from "./validations/checkHasTLD";
import { checkIsIp } from "./validations/checkIsIp";
import { checkProtocols } from "./validations/checkProtocols";

const defaultOptions: Required<IOptions> = {
    domainBlacklist: [],
    allowIp: false,
    protocols: ['http:', 'https:'],
    maxLength: 2048,
    minLength: 5,
    allowBasicAuth: false,
}

function createOptions(options: IOptions) {
    return {
        ...defaultOptions,
        ...options,
    }
}

const errorMsg = 'Invalid URL'
export function parseUrl(urlString: string, userOptions: IOptions) {
    const options = createOptions(userOptions);

    try {
        if (urlString.length > options.maxLength) {
            throw new Error(errorMsg);
        }

        if (urlString.length < options.minLength) {
            throw new Error(errorMsg);
        }

        const urlObject = new URL(urlString);
        checkProtocols(urlObject, options);
        checkBlacklist(urlObject, options);
        checkCharacters(urlObject, options);
        hasTLD(urlObject);

        if (!options.allowIp) {
            checkIsIp(urlObject);
        }

        if (!options.allowBasicAuth) {
            checkBasicAuth(urlObject);
        }
        
        return urlObject.href;

    } catch {
        return null;
    }
}