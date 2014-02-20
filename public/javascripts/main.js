
require.config({

  baseURL: 'javascripts',

  paths: {
  	'jquery':'//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',
  	'underscore':'//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js',
  	'backbone':'//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min.js'
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