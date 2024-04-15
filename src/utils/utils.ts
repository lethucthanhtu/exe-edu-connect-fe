/**
 * Uppercase first letter & lowercase others
 * Example: aPpLe => Apple
 */
export function capitalize(str: string): string {
    return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : str;
}

/**
 * Upper first letter of all words in String
 * Example: hEllo wORld => Hello World
 */
function capitalizes(str: string): string {
    const words = str.split(' ');
    return words
        .map((word) => {
            return capitalize(word);
        })
        .join(' ');
}

/**
 * Format follow CamelCase convention
 * Exmple: hello world => HelloWorld
 */
export function camelCase(str: string): string {
    return capitalizes(str).replace(/ /g, '');
}
