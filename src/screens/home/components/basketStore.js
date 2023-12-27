import { makeAutoObservable } from 'mobx';

class BasketStore {
  orders = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToBasket(item) {
    this.orders.push(item);
  }

  removeBasketItem(index) {
    this.orders.splice(index, 1);
  }

  clearBasket() {
    this.orders = [];
  }

  calculateTotal() {
    return this.orders.reduce((total, item) => {
      const price = parseFloat(item.textNewPrice);
      return !isNaN(price) ? total + price : total;
    }, 0);
  }

  get basketCount() {
    return this.orders.length;
  }
}

const basketStore = new BasketStore();
export default basketStore;
