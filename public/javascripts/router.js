var app = app || {};

define(['backbone', 'views/homepage', 'views/TopView', 'views/createProduct', 'models/product', 'views/product2',
        'views/orders', 'views/neworder', 'models/order', 'views/orderDetailView' ],
  function(Backbone, HomePage, TopView, NewProductView, ProductModel, ProductDetailView, OrderListView, NewOrderView, OrderModel, OrderDetailView) {

    return Backbone.Router.extend({

      routes: {
        "": 'homePage',
        'products': 'index',
        'orders': 'allOrders',
      	'products/:id' : 'edit',
      	'new': 'newProduct',
        'orders/new': 'newOrder',
        'orders/:id': 'showOrder'

      },

      homePage: function() {
        new HomePage();

      },

      index: function() {
        
        (app.ProductList).fetch({
          success: function() {
            new TopView({ collection: app.ProductList });
          },
          error: function() {
            console.log('Server error: Could not load products.');
          }
        });
      },

      newProduct: function() {

        new NewProductView( {model: new ProductModel()} );

      },

      edit: function(id) {

        var model = new ProductModel({id: id});

        model.fetch({
          success: function() {
            new ProductDetailView( {model: model} );
          },

          error: function() {
            console.log('Server error: could not retreive product.');
          }
        });

      },

      allOrders: function() {
        (app.OrderList).fetch({
          success: function() {
            new OrderListView({ collection: app.OrderList });
          },
          error: function() {
            console.log('Server error: Could not load orders.');
          }
        });
      },

      newOrder: function() {
        (app.ProductList).fetch({ //get product list
          success: function() {
            new NewOrderView( { model: new OrderModel(), collection: app.ProductList } );
          },
          error: function() {
            console.log('Server error: Could not load product catalog for orders.');
          }
        });
      }, 

      showOrder: function(id) {
        
        var model = new OrderModel({id: id});

        model.fetch({
          success: function() {
            new OrderDetailView( {model: model} );
          },

          error: function() {
            console.log('Server error: could not retreive order.');
          }
        });

      }


    });

});