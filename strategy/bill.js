class Bill {
  constructor(amount, strategy) {
    this.amount = amount
    this.strategy = strategy
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  getFinalAmount() {
    return this.strategy(this.amount)
  }
}

const discount = (amount) => amount * 0.9
const cashback = (amount) => amount + 50

const bill = new Bill(100, discount)
console.log(bill.getFinalAmount()) // 90

bill.setStrategy(cashback)
console.log(bill.getFinalAmount()) // 150
