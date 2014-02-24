define(['backbone', 'models/product'],
  function(Backbone, ProductModel) {

	return Backbone.Collection.extend({

	  model: ProductModel,

	  url: '/products'

	});
});