export interface IOptions {
    domainBlacklist?: string[];
    allowIp?: boolean;
    protocols?: string[];
    maxLength?: number;
    minLength?: number;
    allowBasicAuth?: boolean;
}