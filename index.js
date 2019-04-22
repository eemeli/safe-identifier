const { reservedES3, reservedES5 } = require('./reserved')

/**
 * Sanitize a string for use as a property name
 *
 * By default uses `obj.key` notation, falling back to `obj["key"]` if the key
 * contains invalid characters or is an ECMAScript 3rd Edition reserved word
 * (required by IE8).
 *
 * @param {string} [obj] If empty, returns only the possibly quoted key
 * @param {string} key The property name
 * @returns {string}
 */
function property(obj, key) {
  if (/^[A-Z_$][0-9A-Z_$]*$/i.test(key) && !reservedES3[key]) {
    return obj ? obj + '.' + key : key
  } else {
    const jkey = JSON.stringify(key)
    return obj ? obj + '[' + jkey + ']' : jkey
  }
}

/**
 * Utility function for escaping a function name if required
 */
function funcname(key) {
  const fn = key.trim().replace(/\W+/g, '_');
  return reservedES3[fn] || reservedES5[fn] || /^\d/.test(fn) ? '_' + fn : fn;
}

module.exports = { funcname, property }
