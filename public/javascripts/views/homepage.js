define(['jquery', 'underscore', 'backbone', 'text!templates/homePage.html', 'shared',],
  function($, _, Backbone, HomePageTmpl, shared) {

    return Backbone.View.extend({

      el: '#shipwire',

      initialize: function() {
        this.render();
      },

      homeTmpl: _.template( HomePageTmpl ),

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
        shared.router.navigate('orders', {trigger: true} );
      },

      productIndex: function() {
        shared.router.navigate('products', {trigger: true} );
      }


    });

});