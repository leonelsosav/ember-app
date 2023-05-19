import { module, test } from 'qunit';
import { setupTest } from 'emberjs-tutorial/tests/helpers';

module('Unit | Service | shopping-cart', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:shopping-cart');
    // console.log(service)
    assert.ok(service);
  });

  test('addItem works', function(assert) {
    const service = this.owner.lookup('service:shopping-cart');
    console.log(service)
    assert.equal(service.itemList.length, 0, 'item list is empty')
    service.addItem({})
    assert.equal(service.itemList.length, 1, 'item list is filled with one item')
  })
});
