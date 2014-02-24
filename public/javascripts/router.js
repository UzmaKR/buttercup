define(['backbone', 'views/homepage', 'views/TopView', 'views/createProduct', 'models/product', 'views/product2',
        'views/orders', 'views/neworder', 'models/order', 'views/orderDetailView','shared'],
  function(Backbone, HomePage, TopView, NewProductView, ProductModel, ProductDetailView, OrderListView, NewOrderView, OrderModel, OrderDetailView,
            shared) {

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
        
        (shared.productList).fetch({
          success: function() {
            new TopView({ collection: shared.productList });
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
        (shared.orderList).fetch({
          success: function() {
            new OrderListView({ collection: shared.orderList });
          },
          error: function() {
            console.log('Server error: Could not load orders.');
          }
        });
      },

      newOrder: function() {
        (shared.productList).fetch({ //get product list
          success: function() {
            new NewOrderView( { model: new OrderModel(), collection: shared.productList } );
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