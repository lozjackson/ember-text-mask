import Ember from 'ember';

const { createTextMaskInputElement } = self.textMaskCore;

export default Ember.TextField.extend({

  didInsertElement() {
    this._super(...arguments);
    let { element:inputElement, mask } = this.getProperties('element', 'mask');
    this.set('textMaskInputElement', createTextMaskInputElement({ inputElement, mask }));
  },

  input(event) {
    this.get('textMaskInputElement').update(event.target.value);
  }
});
