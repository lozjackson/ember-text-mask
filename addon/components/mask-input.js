import Ember from 'ember';
import TextMask from 'ember-text-mask/lib/text-mask';

export default Ember.TextField.extend({

  didInsertElement() {
    this._super(...arguments);
    let { element:inputElement, mask } = this.getProperties('element', 'mask');
    this.set('textMaskInputElement', TextMask.textMaskCore.createTextMaskInputElement({ inputElement, mask }));
  },

  input(event) {
    this.get('textMaskInputElement').update(event.target.value);
  }
});
