import Ember from 'ember';
import TextMask from 'ember-text-mask/lib/text-mask';

export default Ember.TextField.extend({

  textMaskInputElement: null,

  _attachEventListeners(textMaskInputElement) {
    Ember.$(this.get('element')).on('input', ({target: {value}}) => {
      return textMaskInputElement.update(value);
    });
  },

  _removeEventListeners() {
    Ember.$(this.get('element')).off('input');
  },

  didInsertElement() {
    this._super(...arguments);
    
    const textMaskInputElement = TextMask.textMaskCore.createTextMaskInputElement({
      inputElement: this.get('element'),
      mask: this.get('mask')
    });
    this.set('textMaskInputElement', textMaskInputElement);
    this._attachEventListeners(textMaskInputElement);
  },

  willDestroyElement() {
    this._super(...arguments);
    this._removeEventListeners();
  }
});
