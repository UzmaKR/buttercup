define(['jquery', 'underscore', 'backbone', 'models/order', 'views/order', 'shared', 'text!templates/orders.html'],

  function($, _, Backbone, OrderModel, OrderView, shared, OrdersTmpl) {

    return Backbone.View.extend({

      model: OrderModel,

      el: '#shipwire',

      initialize: function() {
        this.render();
      },

      events: {
        'click .add-order': 'addOrder',
        'click .backhome': 'goHome'
      },

      orderTmpl: _.template( OrdersTmpl ),

      render: function() {
      	var self = this;
        this.$el.empty();
        this.$el.html( this.orderTmpl() );
        self.orderItem = this.$('#orders-table #order-info');
        if (this.collection) {
          if (this.collection.models.length === 0) {
            $('<p>No orders placed.</p>').appendTo(this.$('#order-body #msgs'));
          }
          this.collection.forEach(function(order) {
        	  var view = new OrderView( {model: order} );
        	  (view.$el).appendTo(self.orderItem);
          });
        }

      },

      addOrder: function() {
      	shared.router.navigate('orders/new', {trigger: true} );
      },

      goHome: function() {
        shared.router.navigate('', {trigger: true} );
      }


    });

});