export default function getFullYear() {
    return new Date().getFullYear();
}

export default funtion getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}
