
var app = app || {};

app.Orders = Backbone.Collection.extend({

  model: app.Order,

  url: '/orders'


});

app.OrderList = new app.Orders();