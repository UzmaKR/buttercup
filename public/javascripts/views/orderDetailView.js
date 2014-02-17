var app = app || {};

app.OrderDetailView = Backbone.View.extend({

  model: app.Order,

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
    // this.delegateEvents();
  },

  gotoOrders: function() {
    router.navigate('orders',{trigger: true} );
  }


});