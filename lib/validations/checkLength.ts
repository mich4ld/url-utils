import { IOptions } from "../interfaces";

export function checkLength(urlString: string, options: Required<IOptions>) {
    if (urlString.length > options.maxLength) {
        throw new Error('Invalid URL');
    }

    if (urlString.length < options.minLength) {
        throw new Error('Invalid URL');
    }
}