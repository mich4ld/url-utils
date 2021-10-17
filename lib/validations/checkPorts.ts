export function checkPort({ port }: URL) {
    if (port != '') {
        throw new Error('Ports are not allowed!');
    }
}