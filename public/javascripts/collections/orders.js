define(['backbone', 'models/order'],
  function(Backbone, OrderModel) {
	return Backbone.Collection.extend({

	  model: OrderModel,

	  url: '/orders'


	});
});