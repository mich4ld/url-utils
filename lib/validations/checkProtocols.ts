import { IOptions } from "../interfaces";

export function checkProtocols(url: URL, { protocols }: Required<IOptions>) {
    if (!protocols.includes(url.protocol)) {
        throw new Error('Invalid URL protocol');
    }
}