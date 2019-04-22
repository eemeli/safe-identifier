const { reservedES3, reservedES5 } = require('./reserved')

/**
 * Utility function for quoting an Object's key value if required
 *
 * Quotes the key if it contains invalid characters or is an
 * ECMAScript 3rd Edition reserved word (for IE8).
 *
 * @private
 */
export function propname(key, obj) {
  if (/^[A-Z_$][0-9A-Z_$]*$/i.test(key) && !reservedES3[key]) {
    return obj ? `${obj}.${key}` : key;
  } else {
    const jkey = JSON.stringify(key);
    return obj ? obj + `[${jkey}]` : jkey;
  }
}

/**
 * Utility function for escaping a function name if required
 *
 * @private
 */
export function funcname(key) {
  const fn = key.trim().replace(/\W+/g, '_');
  return reservedES3[fn] || reservedES5[fn] || /^\d/.test(fn) ? '_' + fn : fn;
}
