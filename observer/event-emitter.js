class EventEmitter {
  constructor() {
    if (EventEmitter.instance) {
      throw new Error('You can only create one instance!')
    }

    this.listeners = {}
    EventEmitter.instance = this
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(callback)
  }

  emit(event, data) {
    if (!this.listeners[event]) {
      return
    }
    this.listeners[event].forEach(
      callback => callback(data)
    )
  }

  off(event, callback) {
    if (!this.listeners[event]) {
      return
    }

    this.listeners[event] = this.listeners[event].filter(
      cb => cb !== callback
    )
  }
}

const emitter = Object.freeze(new EventEmitter())

const handleClick = (data) => {
  console.log(`Button clicked with data: ${data}`)
}
const handleHover = (data) => {
  console.log(`Button hovered with data: ${data}`)
}

emitter.on('click', handleClick)
emitter.on('hover', handleHover)

const emitEvents = () => {
  emitter.emit('click', 'Hello world!')
  emitter.emit('hover', 'Hi there!')

  emitter.off('click', handleClick)
  emitter.off('hover', handleHover)
}
