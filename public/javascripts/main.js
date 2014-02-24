
require.config({

  baseUrl: 'javascripts',

  paths: {
    'text':'lib/text',
  	'jquery':'lib/jquery-2.1.0.min',
  	'underscore':'lib/underscore-min',
  	'backbone':'lib/backbone-min'
  },

  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery','underscore'],
      exports: 'Backbone'
    }
  }
});

require(['app']);