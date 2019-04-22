const { reservedES3, reservedES5 } = require('./reserved')

/**
 * Sanitize a string for use as an identifier name
 *
 * Replaces invalid character sequences with _ and may add a _ prefix if the
 * resulting name would conflict with a JavaScript reserved name.
 *
 * @param {string} key The desired identifier name
 * @returns {string}
 */
function identifier(key) {
  const id = key.trim().replace(/\W+/g, '_')
  return reservedES3[id] || reservedES5[id] || /^\d/.test(id) ? '_' + id : id
}

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

module.exports = { identifier, property }
