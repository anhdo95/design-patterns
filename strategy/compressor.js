class Compressor {
  constructor(strategy) {
    this.strategy = strategy
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  compress(data) {
    return this.strategy(data)
  }
}

class Compression {
  static gzip(data) {
    // do implemention here
    return 'gzipped'
  }

  static deflate(data) {
    // do implemention here
    return 'deflated'
  }
}

const gzip = (data) => Compression.gzip(data)
const deflate = (data) => Compression.deflate(data)

const compressor = new Compressor(gzip)
console.log(compressor.compress('Hello world!')) // 'gzipped'

compressor.setStrategy(deflate)
console.log(compressor.compress('Hello world!')) // 'deflated'