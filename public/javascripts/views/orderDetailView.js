var app = app || {};

define(['qjuery', 'underscore', 'Backbone', 'models/order'],
  function($, _, Backbone, OrderModel) {

    return Backbone.View.extend({

      model: OrderModel,

      detailTmpl: _.template( $('#single-order-template').html() ),  

      initialize: function() {
        this.render();
      },

      events: {
      	'click a#order-back':'gotoOrders'
      },

      render: function() {
        var view = this.$el.html( this.detailTmpl( this.model.toJSON() )  );
        $('#shipwire').empty();
        $('#shipwire').append(view);
      },

      gotoOrders: function() {
        router.navigate('orders',{trigger: true} );
      }


    });

});