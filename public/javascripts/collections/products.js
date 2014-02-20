var app = app || {}

define(['backbone', 'models/product'],
  function(Backbone, ProductModel) {

	return Backbone.Collection.extend({

	  model: ProductModel,

	  url: '/products'

	});
});

app.ProductList = new app.Products();