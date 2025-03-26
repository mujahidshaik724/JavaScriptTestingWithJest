function ceaserCipher(str, shift) {
    const isLetter = (char) => char.toLowerCase() !== char.toUpperCase();
    
    return str.split('').map(char => {
        if (!isLetter(char)) return char;
        const isUpperCase = char === char.toUpperCase();
        const base = isUpperCase ? 65 : 97;
        const charCode = ((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base;
        return String.fromCharCode(charCode);
    }).join('');
}
module.exports = ceaserCipher;