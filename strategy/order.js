/**
 * Let's say you are building an e-commerce platform
 * and you want to offer various shipping options for the customers.
 */
class Order {
  constructor(items, shipping) {
    this.items = items
    this.shipping = shipping
  }

  setShipping(shipping) {
    this.shipping = shipping
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => (total += item.price * item.quantity),
      this.shipping.calculate()
    )
  }
}

class Shipping {
  constructor() {}

  calculate() {}
}

class StandardShipping extends Shipping {
  constructor() {
    super()
  }

  calculate() {
    return 5
  }
}

class ExpressShipping extends Shipping {
  constructor() {
    super()
  }

  calculate() {
    return 10
  }
}

class InternationalShipping extends Shipping {
  constructor() {
    super()
  }

  calculate() {
    return 15
  }
}

const items = [
  {
    name: 'Item 1',
    price: 10,
    quantity: 2,
  },
  {
    name: 'Item 2',
    price: 5,
    quantity: 1,
  },
]

const order = new Order(items, new StandardShipping())

console.log(order.calculateTotal()) // 30

order.setShipping(new ExpressShipping())
console.log(order.calculateTotal()) // 35

order.setShipping(new InternationalShipping())
console.log(order.calculateTotal()) // 40
