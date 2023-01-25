class MailingList {
  constructor() {
    if (MailingList.instance) {
      throw new Error('You can only create one instance!')
    }

    this.observers = []
    MailingList.instance = this
  }

  subscribe(observer) {
    this.observers.push(observer)
    return () => this.unsubscribe(observer)
  }

  unsubscribe(observer) {
    const index = this.observers.findIndex(subscriber => subscriber === observer)

    if (index !== -1) {
      this.observers[index] = this.observers[this.observers.length - 1]
      this.observers.pop()
    }
  }

  notifiy(message) {
    this.observers.forEach(observer => observer.onMessage(message))
  }

  sendMessage(message) {
    this.notifiy(message)
  }
}

class User {
  constructor(user) {
    this.user = user
  }

  onMessage(message) {
    console.log(`${this.user.name} received`, message);
  }
}

const user1 = new User({ name: 'User 1' })
const user2 = new User({ name: 'User 2' })

const mailingList = Object.freeze(new MailingList())

const unsubscribeUser1 = mailingList.subscribe(user1)
mailingList.subscribe(user2)

const notifyMessagesToUsers = () => {
  mailingList.sendMessage('Hello world!')
  
  // Unsubscribe the user from the returned value 
  unsubscribeUser1()

  // Unsubscribe the user by using a built-in method
  mailingList.unsubscribe(user2);
}