/**
 * @typedef Return
 * @property {Boolean} suc
 * @property {String=} msg
 * @property {Any=}    value
 */

/**
 * @export
 * @param  {String} key
 * @return {Return}
 */
export const get = function (key) {
  const type = Object.prototype.toString.call(key).slice(8, -1)
  if (type !== 'String') {
    throw new Error(`Expected key type is String, but got ${type}.`)
  }
  try {
    return {
      suc: true,
      value: JSON.parse(localStorage.getItem(key))
    }
  } catch (err) {
    return {
      suc: false,
      msg: err
    }
  }
}

/**
 * @export
 * @param  {String} key
 * @param  {String} value
 * @return {Return}
 */
export const set = function (key, value) {
  const keyType = Object.prototype.toString.call(key).slice(8, -1)
  const valueType = Object.prototype.toString.call(value).slice(8, -1)
  if (keyType !== 'String') {
    throw new Error(`Expected key type is String, but got ${keyType}.`)
  } else if (valueType !== 'String') {
    throw new Error(`Expected value type is String, but got ${valueType}.`)
  }
  try {
    localStorage.setItem(key, value)
    return { suc: true }
  } catch (err) {
    return {
      suc: false,
      msg: err
    }
  }
}

/**
 * @export
 * @param  {String} key
 * @return {Return}
 */
export const remove = function (key) {
  const type = Object.prototype.toString.call(key).slice(8, -1)
  if (type !== 'String') {
    throw new Error(`Expected key type is String, but got ${type}.`)
  }
  try {
    localStorage.removeItem(key)
    return { suc: true }
  } catch (err) {
    return {
      suc: false,
      msg: err
    }
  }
}

/**
 * @export
 * @return {Return}
 */
export const clear = function () {
  try {
    localStorage.clear()
    return { suc: true }
  } catch (err) {
    return {
      suc: false,
      msg: err
    }
  }
}

export default {
  get, set, remove, clear
}
