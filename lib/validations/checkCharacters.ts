import { IOptions } from "../interfaces";

const bannedCharacters = ['!', '@', '_', '(', ')']
const bannedCharactersAndIP = [...bannedCharacters, '[', ']']

function checkIsBanned(blacklist: string[], urlPart: string) {
    blacklist.forEach(char => {
        if (urlPart.includes(char)) {
            throw new Error('Special characters are not allowed!');
        }
    })
}

export function checkCharacters(url: URL, options: IOptions) {
    if (options.allowIp) {
        checkIsBanned(bannedCharacters, url.hostname);
        return;
    }

    checkIsBanned(bannedCharactersAndIP, url.hostname);
}