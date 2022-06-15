// let balance = 500.0;
class Account {
  constructor(username, balance) {
    this.username = username;
    this.balance = balance;
    this.history = 0;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (this.isAllowed()) {
      this.account.balance += this.value;
      this.account.history += this.value;
    } else {
      console.log("+++++++++It's not allowed to withdrow the money+++++++++");
    }
  }

  isAllowed() {
    let cal = this.account.balance + this.value;
    if (cal < 0) {
      return false;
    } else {
      return true;
    }
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
console.log('=================================================');
const myAccount = new Account('snow-patrol', 500.0);
console.log('Balance:', myAccount.balance);

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(120.0, myAccount);
t3.commit();
console.log('Transaction 3:', t3);

console.log('Balance:', myAccount.balance);

console.log('=================================================');
