import { IOptions } from "./interfaces";
import { createOptions } from "./options";
import { checkBasicAuth } from "./validations/checkBasicAuth";
import { checkBlacklist } from "./validations/checkBlacklist";
import { checkCharacters } from "./validations/checkCharacters";
import { hasTLD } from "./validations/checkHasTLD";
import { checkIsIp } from "./validations/checkIsIp";
import { checkProtocols } from "./validations/checkProtocols";

export function parseUrl(urlString: string, userOptions: IOptions) {
    const options = createOptions(userOptions);
    console.log(userOptions);
    try {
        if (urlString.length > options.maxLength) {
            throw new Error('Invalid URL');
        }

        if (urlString.length < options.minLength) {
            throw new Error('Invalid URL');
        }

        const urlObject = new URL(urlString);
        checkProtocols(urlObject, options);
        checkBlacklist(urlObject, options);
        checkCharacters(urlObject, options);

        if (!options.allowIp) {
            checkIsIp(urlObject);
            hasTLD(urlObject);
        }

        if (!options.allowBasicAuth) {
            checkBasicAuth(urlObject);
        }

        return urlObject;

    } catch (err) {
        return null;
    }
}