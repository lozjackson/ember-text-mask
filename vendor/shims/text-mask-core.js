(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['text-mask-core'] };
  }

  define('text-mask-core', [], vendorModule);
})();
