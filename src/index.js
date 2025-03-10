// Entry
class Entry {
    constructor(date, amount, description) {
      this.date = date;
      this.amount = amount;
      this.description = description;
    }
  
    getFormattedAmount() {
      return `${this.amount} €`;
    }
  }
  
  // Income
  class Income extends Entry {
    constructor(date, amount, description) {
      super(date);
      this.amount = amount;
      this.description = description;
    }
    type = "income";
  }
  
  // Expense
  class Expense extends Entry {
    constructor(date, amount, description, paid) {
      super(date);
      this.amount = amount;
      this.description = description;
      this.paid = paid;
    }
    type = "expense";
  
    getFormattedAmount() {
      return `-${this.amount} €`;
    }
  }
  
  // Budget
  class Budget {
    constructor() {
      this.entries = [];
    }
  
    addEntry(entry) {
      return this.entries.push(entry);
    }
  
    getCurrentBalance() {
      if (this.entries.length === 0) {
        return 0;
      }
      let balance = 0;
      for (let i = 0; i < this.entries.length; i++) {
        if (this.entries[i].type === "income") {
          balance += this.entries[i].amount;
        } else if (this.entries[i].type === "expense") {
          balance -= this.entries[i].amount;
        }
      }
      return balance;
    }
  
    getFormattedEntries() {
      return;
    }
  }