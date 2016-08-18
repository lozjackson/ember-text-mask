import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mask-input', 'Integration | Component | mask input', {
  integration: true
});

test('it renders an input element', function(assert) {
  this.render(hbs`{{mask-input}}`);
  assert.equal(this.$('input').length, 1);
});
