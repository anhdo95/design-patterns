// The constructor to decorate
function Macbook() {
  this.cost = function() {
    return 1299
  }

  this.screenSize = function() {
    return 13.3
  }
}

// Decorator 1
function Memory(macbook) {
  const baseCost = macbook.cost()
  macbook.cost = function() {
    return baseCost + 80
  }
}

// Decorator 2
function Engraving(macbook) {
  const baseCost = macbook.cost()
  macbook.cost = function() {
    return baseCost + 200
  }
}

// Decorator 3
function Insurance(macbook) {
  const baseCost = macbook.cost()
  macbook.cost = function() {
    return baseCost + 250
  }
}

// Decorator 4
function Discount(macbook) {
  const baseCost = macbook.cost()
  macbook.cost = function() {
    return Math.round(baseCost * 0.8) // discount 20%
  }
}

const macbook = new Macbook()
Memory(macbook)
Engraving(macbook)
Insurance(macbook)
Discount(macbook)

console.log(macbook.cost()) // 1463
console.log(macbook.screenSize()) // 13.3