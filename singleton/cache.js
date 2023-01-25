class Cache {
  constructor() {
    if (Cache.instance) {
      throw new Error('You can only create one instance!')
    }

    this.cache = new Map()
    Cache.instance = this
  }

  set(key, value) {
    this.cache.set(key, value)
  }

  get(key) {
    return this.cache.get(key)
  }

  has(key) {
    return this.cache.has(key)
  }

  delete(key) {
    if (!this.has(key)) {
      return false
    }

    return this.cache.delete(key)
  }
}

// This ensures that the newly created instance is not modifiable.
const cache = Object.freeze(new Cache())

// Exporting the variable as the `default` value within the file to make it globally accessible.
export default cache