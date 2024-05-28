/**
 * Uppercase first letter & lowercase others
 * ```
 *  capitalize('aPpLe')               //return 'Apple'
 *  capitalize('aPpLe', true)         //return 'Apple'
 *  capitalize('heLlo WoRLD', false)  //return 'HeLlo WoRLD'
 * ```
 * @param str - user string
 * @param isFormat - TRUE by default
 * @returns string
 */
export const capitalize = (str: string, isFormat = true): string => {
  if (!str) return str;
  str = str.trim();
  const firstLetter = str.charAt(0).toUpperCase();
  const others = isFormat ? str.slice(1).toLowerCase() : str.slice(1);
  return str ? firstLetter + others : str;
};

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
 * ```
 *  pathlify(
 *    '/search',
 *    {
 *      q: 'alo',
 *      p: 2,
 *      offset: 25,
 *    }) //return '/search?q=alo&p=2&offset=25'
 * ```
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

export const numberFormat = (num: number, decimal = 0): string =>
  Number(num)
    ? num.toFixed(decimal).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    : 'NaN';

/**
 * ```
 *  currencyFormat(1000000)       //return 'VND 1,000,000'
 *  currencyFormat(1000000, USD)  //return 'USD 1,000,000'
 * ```
 * @param num
 * @param currency - default = VND
 * @returns
 */
export const currencyFormat = (
  num: number,
  currency = 'VNĐ',
  decimal = 2,
  isUniversalFormat = true
): string =>
  isUniversalFormat
    ? currency + ' ' + numberFormat(num, decimal)
    : numberFormat(num, decimal) + ' ' + currency;

/** */
export const getWeeksBetweenDates = (
  startDate: string,
  endDate: string
): number => {
  try {
    // Parse the input dates
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the difference in milliseconds
    const ms = end.getTime() - start.getTime();

    // Convert milliseconds to days
    const days = ms / (1000 * 60 * 60 * 24);

    // Convert days to weeks
    const weeks = days / 7;

    return weeks;
  } catch (error) {
    return 0;
  }
};
