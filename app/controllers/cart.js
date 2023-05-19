import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subtotal() {
    return this.cart.itemList.reduce(
      (prev, curr) => prev + curr.price * curr.count,
      0
    );
  }

  get tax() {
    return this.subtotal * 0.09;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    if (count >= 0) item.count = Number(count);
    else item.count = 0;
  }
}
