import { IOptions } from "./interfaces";
import { createOptions } from "./options";
import { checkBasicAuth } from "./validations/checkBasicAuth";
import { checkBlacklist } from "./validations/checkBlacklist";
import { checkCharacters } from "./validations/checkCharacters";
import { hasTLD } from "./validations/checkHasTLD";
import { checkIsIp } from "./validations/checkIsIp";
import { checkLength } from "./validations/checkLength";
import { checkProtocols } from "./validations/checkProtocols";

export function parseUrl(urlString: string, userOptions: IOptions) {
    const options = createOptions(userOptions);

    try {
        checkLength(urlString, options);
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