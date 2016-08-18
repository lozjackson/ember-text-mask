import Ember from 'ember';
import TextMask from 'ember-text-mask/lib/text-mask';

export default Ember.TextField.extend({

  didInsertElement() {
    this._super(...arguments);

    this.set('textMaskInputElement', TextMask.textMaskCore.createTextMaskInputElement({
      inputElement: this.get('element'),
      mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    }));
  },

  input(event) {
    this.get('textMaskInputElement').update(event.target.value);
  }
});
