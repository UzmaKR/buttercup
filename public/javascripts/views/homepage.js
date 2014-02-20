
var app = app || {};

define(['jquery', 'underscore', 'Backbone'],
  function($, _, Backbone) {

    return Backbone.View.extend({

      el: '#shipwire',

      initialize: function() {
        this.render();
      },

      homeTmpl: _.template( $('#home-page-template').html() ),

      events: {
        'click #orderlist': 'orderIndex',
        'click #productlist': 'productIndex'

      },

      render: function() {
      	this.$el.empty();
        this.$el.html( this.homeTmpl() );
        this.delegateEvents();
      },

      orderIndex: function() {
        router.navigate('orders', {trigger: true} );
      },

      productIndex: function() {
        router.navigate('products', {trigger: true} );
      }


    });

});