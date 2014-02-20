
var app = app || {};

define(['backbone', 'models/order'],
  function(Backbone, OrderModel) {
	return Backbone.Collection.extend({

	  model: OrderModel,

	  url: '/orders'


	});
});

app.OrderList = new app.Orders();