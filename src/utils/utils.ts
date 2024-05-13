/**
 * Uppercase first letter & lowercase others
 * Example: aPpLe => Apple
 */
export const capitalize = (str: string): string =>
  str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : str;

/**
 * Upper first letter of all words in String.
 * Use CSS class 'capitalize' instead
 * Example: hEllo wORld => Hello World
 */
const capitalizes = (str: string): string =>
  str
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ');

/**
 * Format follow CamelCase convention
 * Example: hello world => HelloWorld
 */
export const camelCase = (str: string): string =>
  capitalizes(str).replace(/ /g, '');

/**
 *
 * @param path - path string
 * @param params
 * @returns
 */
export const pathlify = (path: string, params = {}): string => {
  let result = path + '?';
  try {
    const obj = Object.entries(params);
    const length = obj.length;
    //get params & values
    obj.forEach(([param, value], index) => {
      result += param + '=' + value;
      if (index !== length - 1) result += '&';
    });
  } catch (error) {
    result = '';
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.error('Cannot read "params"=', params);
  }
  return result;
};

export const currencyFormat = (num: number, currency = 'VNĐ') =>
  currency + ' ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
