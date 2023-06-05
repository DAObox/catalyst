export function truncate(str: string, length: number) {
    return str.length > length? str.slice(0, length) + '...' : str;
}

export function truncateAddress(address: string) {
    return address.substring(0, 6) + "..." + address.substring(address.length-6, address.length)
}

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}