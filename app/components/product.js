import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductComponent extends Component {
  @tracked color = 'red';

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }
}
