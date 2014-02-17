
var app = app || {};

app.OrderListView = Backbone.View.extend({

  model: app.Order,

  el: '#shipwire',

  initialize: function() {
    this.render();
  },

  events: {
    'click .add-order': 'addOrder',
    'click .backhome': 'goHome'
  },

  orderTmpl: _.template( $('#orders-template').html() ),

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
    	  var view = new app.OrderView( {model: order} );
    	  (view.$el).appendTo(self.orderItem);
      });
    }

  },

  addOrder: function() {
  	router.navigate('orders/new', {trigger: true} );
  },

  goHome: function() {
    router.navigate('', {trigger: true} );
  }


});