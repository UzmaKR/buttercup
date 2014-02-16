var app = app || {}

app.Products = Backbone.Collection.extend({

  model: app.Product,

  url: '/products'

});

app.ProductList = new app.Products();