var app = app || {};

app.Controller = Backbone.Router.extend({

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
    new app.HomePage();

  },

  index: function() {
    
    (app.ProductList).fetch({
      success: function() {
        new app.TopView({ collection: app.ProductList });
      },
      error: function() {
        console.log('Server error: Could not load products.');
      }
    });
  },

  newProduct: function() {

    new app.newProductView( {model: new app.Product()} );

  },

  edit: function(id) {

    var model = new app.Product({id: id});

    model.fetch({
      success: function() {
        new app.ItemDetailsView( {model: model} );
      },

      error: function() {
        console.log('Server error: could not retreive product.');
      }
    });

  },

  allOrders: function() {
    (app.OrderList).fetch({
      success: function() {
        new app.OrderListView({ collection: app.OrderList });
      },
      error: function() {
        console.log('Server error: Could not load orders.');
      }
    });
  },

  newOrder: function() {
    (app.ProductList).fetch({ //get product list
      success: function() {
        new app.NewOrderView( { model: new app.Order(), collection: app.ProductList } );
      },
      error: function() {
        console.log('Server error: Could not load product catalog for orders.');
      }
    });
  }, 

  showOrder: function(id) {
    console.log('router triggered.');
    var model = new app.Order({id: id});

    model.fetch({
      success: function() {
        new app.OrderDetailView( {model: model} );
      },

      error: function() {
        console.log('Server error: could not retreive order.');
      }
    });



  }


});