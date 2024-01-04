import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    } else {
      this._amount = amount;
    }

    if (currency instanceof Currency === false) {
      throw TypeError('Currency must be an instance of Currency');
    } else {
      this._currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency === false) {
      throw TypeError('Currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw TypeError('Conversion rate must be a number');
    }

    return amount * conversionRate;
  }
}
