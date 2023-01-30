const cache = new Map()

// `Object.freeze`, its methods cannot be changed, nor can new methods or properties be added
export default Object.freeze({
  set(key, value) {
    cache.set(key, value)
  },

  get(key) {
    return cache.get(key)
  },

  has(key) {
    return cache.has(key)
  },

  delete(key) {
    if (!has(key)) {
      return false
    }

    return cache.delete(key)
  },
})
