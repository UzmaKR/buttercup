
define(['jquery', 'underscore', 'backbone', 'models/order', 'shared', 'text!templates/readOrder.html'],
  function($, _, Backbone, OrderModel, shared, ReadOrderTmpl) {

    return Backbone.View.extend({

      model: OrderModel,

      detailTmpl: _.template( ReadOrderTmpl ),  

      initialize: function() {
        this.render();
      },

      events: {
      	'click a#order-back':'gotoOrders'
      },

      render: function() {
        var view = this.$el.html( this.detailTmpl( this.model.toJSON() )  );
        $('#buttercup').empty();
        $('#buttercup').append(view);
      },

      gotoOrders: function() {
        shared.router.navigate('orders',{trigger: true} );
      }


    });

});